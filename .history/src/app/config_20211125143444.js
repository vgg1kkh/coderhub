

const env = require("dotenv")

env.config()

// console.log(process.env.APP_PORT)

module.exports = {
    APP_PORT,
    MYSQL_HOST,
    MYSQL_DATABASE,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD

} = process.env