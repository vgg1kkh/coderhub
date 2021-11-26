const env = require("dotenv")

env.config()


module.exports = {
    APP_PORT,
    MYSQL_HOST,
    MYSQL_DATABASE,
    MYSQL_PORT,
    MYSQL_USERNAME,
    MYSQL_PASSWORD
} = process.env