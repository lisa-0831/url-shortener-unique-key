require("dotenv").config();
const mysql = require("mysql2/promise");
const NUM_WRITE_DB = process.env.NUM_WRITE_DB;
const NUM_READ_DB = process.env.NUM_READ_DB;
const writeConfig = [],
  readConfig = [];
for (let i = 0; i < NUM_WRITE_DB; i++) {
  writeConfig[i] = {
    host: process.env[`DB_HOST_${i}`],
    user: process.env[`DB_USER_${i}`],
    password: process.env[`DB_PASSWORD_${i}`],
    database: process.env[`DATABASE`],
    waitForConnections: true,
    connectionLimit: 20,
    queueLimit: 0,
  };
}
const writePools = writeConfig.map((config) => mysql.createPool(config));

for (let i = 0; i < NUM_WRITE_DB; i++) {
  readConfig[i] = [];
  for (let j = 0; j < NUM_READ_DB; j++) {
    readConfig[i][j] = {
      host: process.env[`DB_HOST_${i}_READ_${j}`],
      user: process.env[`DB_USER_${i}`],
      password: process.env[`DB_PASSWORD_${i}`],
      database: process.env[`DATABASE`],
      waitForConnections: true,
      connectionLimit: 20,
      queueLimit: 0,
    };
  }
}
const readPools = readConfig.map((config) =>
  config.map((c) => mysql.createPool(c))
);

module.exports = { writePools, readPools };
