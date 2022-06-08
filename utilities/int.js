const GROUP_SIZE = 16;
const INITIAL_CHAR =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// console.log(INITIAL_CHAR.length);
// for (let i = 0; i < 4; i++) {
//   console.log(INITIAL_CHAR.slice(GROUP_SIZE * i, GROUP_SIZE * (i + 1)));
//   console.log(INITIAL_CHAR.slice(GROUP_SIZE * i, GROUP_SIZE * (i + 1)).length);
// }

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getShortUrl(num) {
  let = result = "";
  while (num > 0) {
    let remainder = num % 62;
    num = Math.floor(num / 62);
    result = INITIAL_CHAR[remainder] + result;
  }
  return result;
}

module.exports = { getRandomInt, getShortUrl };
