const { pool0, pool1 } = require("./mysqlcon");
const insertQueryString =
  "INSERT INTO url (shortUrlKey, originUrl) VALUES (?, ?)";
const insertShortUrlKey = async (shortUrlKey, originUrl) => {
  const queryBinding = [shortUrlKey, originUrl];
  try {
    const [result] = await pool0.query(insertQueryString, queryBinding);
    return true;
  } catch (err) {
    console.log(err.code);
    return false;
  }
};

const getOriginUrl = async (shortUrlKey) => {
  const selectQueryString = "SELECT originUrl FROM url WHERE shortUrlKey = ?";
  const queryBinding = [shortUrlKey];
  try {
    const [result] = await pool0.query(selectQueryString, queryBinding);
    return result;
  } catch (err) {
    console.log(err.code);
  }
};

module.exports = { insertShortUrlKey, getOriginUrl };
