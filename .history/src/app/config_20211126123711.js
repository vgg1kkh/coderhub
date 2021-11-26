const env = require("dotenv")

env.config()


module.exports = {
    MYSQL_DATABASE:process.env.MYSQL_DATABASE,
    MYSQL_USERNAME: process.env.MYSQL_USERNAME,
    MYSQL_PASSWORD:process.env.MYSQL_PASSWORD,
    MYSQL_HOST: process.env.MYSQ
} = process.env