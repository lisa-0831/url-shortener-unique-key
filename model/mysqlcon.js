require("dotenv").config();
const mysql = require("mysql2/promise");

// create the connection to database
const pool0 = mysql.createPool({
  host: process.env.DB_HOST_0,
  user: process.env.DB_USER_0,
  password: process.env.DB_PASSWORD_0,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,
});

const pool1 = mysql.createPool({
  host: process.env.DB_HOST_1,
  user: process.env.DB_USER_1,
  password: process.env.DB_PASSWORD_1,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,
});

const pool2 = mysql.createPool({
  host: process.env.DB_HOST_2,
  user: process.env.DB_USER_2,
  password: process.env.DB_PASSWORD_2,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,
});

const pool3 = mysql.createPool({
  host: process.env.DB_HOST_3,
  user: process.env.DB_USER_3,
  password: process.env.DB_PASSWORD_3,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,
});

module.exports = { pool0, pool1, pool2, pool3 };
