require("dotenv").config();
const GROUP_SIZE = 16;
const INITIAL_CHAR =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MAX_DIGIT = process.env.MAX_DIGIT;
const BASE = INITIAL_CHAR.length; // 62
const MAX_NUM = Math.pow(BASE, MAX_DIGIT) - 1;
const MIN_NUM = Math.pow(BASE, MAX_DIGIT - 1);

const shortUrlKeyToPool = (shortUrlKey) => {
  const firstCharCode = INITIAL_CHAR.indexOf(shortUrlKey[0]);
  const poolIndex = Math.floor(firstCharCode / GROUP_SIZE);
  return poolIndex;
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getShortUrl = () => {
  let num = getRandomInt(MIN_NUM, MAX_NUM);
  let result = "";
  while (num > 0) {
    let remainder = num % BASE;
    num = Math.floor(num / BASE);
    result = INITIAL_CHAR[remainder] + result;
  }
  return result;
};

module.exports = { getShortUrl, shortUrlKeyToPool, getRandomInt };
