const insertShortUrlKey = async (shortUrlKey, originUrl, pool) => {
  const insertQueryString =
    "INSERT INTO url (shortUrlKey, originUrl) VALUES (?, ?)";
  const queryBinding = [shortUrlKey, originUrl];
  const conn = await pool.getConnection();
  try {
    const [result] = await conn.query(insertQueryString, queryBinding);
    return true;
  } catch (err) {
    console.log(err.code);
    return false;
  } finally {
    await conn.release();
  }
};

const getOriginUrl = async (shortUrlKey, pool) => {
  const selectQueryString = "SELECT originUrl FROM url WHERE shortUrlKey = ?";
  const queryBinding = [shortUrlKey];
  try {
    const [result] = await pool.query(selectQueryString, queryBinding);
    return result;
  } catch (err) {
    console.log(err.code);
  }
};

module.exports = { insertShortUrlKey, getOriginUrl };
