require("dotenv").config();
const mysql = require("mysql2/promise");

// create the connection to database
const pool0 = mysql.createPool({
  host: process.env.DB_HOST_0,
  user: process.env.DB_USER_0,
  password: process.env.DB_PASSWORD_0,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const pool1 = mysql.createPool({
  host: process.env.DB_HOST_1,
  user: process.env.DB_USER_1,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD_1,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = { pool0, pool1 };
