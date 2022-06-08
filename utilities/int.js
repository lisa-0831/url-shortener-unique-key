const GROUP_SIZE = 16;
const INITIAL_CHAR =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const MAX_DIGIT = 5;
const BASE = INITIAL_CHAR.length; // 62
const MAX_NUM = Math.pow(BASE, MAX_DIGIT);
const MIN_NUM = Math.pow(BASE, MAX_DIGIT - 1);

const shortUrlKeyToPool = (shortUrlKey) => {
  const firstCharCode = INITIAL_CHAR.indexOf(shortUrlKey[0]);
  const poolIndex = Math.floor(firstCharCode / GROUP_SIZE);
  return poolIndex;
};

const getRandomInt = (max, min) => {
  return Math.floor(Math.random() * max + min);
};

const getShortUrl = () => {
  let num = getRandomInt(MAX_NUM, MIN_NUM + 1);
  let result = "";
  while (num > 0) {
    let remainder = num % BASE;
    num = Math.floor(num / BASE);
    result = INITIAL_CHAR[remainder] + result;
  }
  return result;
};

module.exports = { getShortUrl, shortUrlKeyToPool };
