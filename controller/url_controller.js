const express = require("express");
const router = express.Router();
const {
  getRandomInt,
  getShortUrl,
  shortUrlKeyToPool,
} = require("../utilities/int.js");
const shortUrlPrefix = "https://shorturl.com/";
const Url = require("../model/url_model.js");
const { writePools, readPools } = require("../model/mysqlcon");

router.get("/:id", async (req, res) => {
  const shortUrlKey = req.params.id;
  const poolIndex = shortUrlKeyToPool(shortUrlKey);
  const shortUrl = shortUrlPrefix + shortUrlKey;
  const readServerIndex = getRandomInt(0, readPools[0].length - 1);
  const [result] = await Url.getOriginUrl(
    shortUrlKey,
    readPools[poolIndex][readServerIndex]
  );
  const { originUrl } = result;
  res.status(200).json({ shortUrl, originUrl });
});

router.post("/shorten", async (req, res) => {
  const { originUrl } = req.body;
  let shortUrlKey = "";
  while (true) {
    shortUrlKey = getShortUrl();
    const poolIndex = shortUrlKeyToPool(shortUrlKey);
    const result = await Url.insertShortUrlKey(
      shortUrlKey,
      originUrl,
      writePools[poolIndex]
    );
    if (result) {
      break;
    } else {
      console.log("duplicate key", shortUrlKey, poolIndex);
    }
  }
  const shortUrl = shortUrlPrefix + shortUrlKey;
  res.status(200).json({ shortUrl, originUrl });
});

module.exports = router;
