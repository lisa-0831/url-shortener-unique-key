const express = require("express");
const router = express.Router();
const MAX_NUM = Math.pow(62, 3);
const { getShortUrl, getRandomInt } = require("../utilities/int.js");
const shortUrlPrefix = "https://shorturl.com/";
const Url = require("../model/url.js");

router.get("/:id", async (req, res) => {
  const shortUrlKey = req.params.id;
  const shortUrl = shortUrlPrefix + shortUrlKey;
  const [result] = await Url.getOriginUrl(shortUrlKey);
  const { originUrl } = result;
  res.status(200).json({ shortUrl, originUrl });
});

router.post("/shorten", async (req, res) => {
  const { originUrl } = req.body;
  const shortUrlKey = getShortUrl(getRandomInt(MAX_NUM));
  while (true) {
    const result = await Url.insertShortUrlKey(shortUrlKey, originUrl);
    if (result) {
      break;
    }
  }
  const shortUrl = shortUrlPrefix + shortUrlKey;
  res.status(200).json({ shortUrl, originUrl });
});

module.exports = router;
