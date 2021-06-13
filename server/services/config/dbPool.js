const dotenv = require('dotenv')
const { Pool } = require('pg')
dotenv.config()

const databaseConfig = new Pool({
  user: process.env.USERNAME_DB,
  host: process.env.HOST_DB,
  database: process.env.DB_NAME,
  password: process.env.PASSWORD_DB,
  port: process.env.PORT_DB,
  ssl: {
    rejectUnauthorized: false
  }
}) 

module.exports = databaseConfig;