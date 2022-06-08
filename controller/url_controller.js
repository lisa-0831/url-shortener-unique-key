const express = require("express");
const router = express.Router();
const { getShortUrl, shortUrlKeyToPool } = require("../utilities/int.js");
const shortUrlPrefix = "https://shorturl.com/";
const Url = require("../model/url_model.js");
const { pool0, pool1, pool2, pool3 } = require("../model/mysqlcon");
const pools = [pool0, pool1, pool2, pool3];

router.get("/:id", async (req, res) => {
  const shortUrlKey = req.params.id;
  const poolIndex = shortUrlKeyToPool(shortUrlKey);
  const shortUrl = shortUrlPrefix + shortUrlKey;
  const [result] = await Url.getOriginUrl(shortUrlKey, pools[poolIndex]);
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
      pools[poolIndex]
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
