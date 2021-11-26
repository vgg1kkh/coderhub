const env = require("dotenv")

env.config()


module.exports = {
    MYSQL_DATABASE:process.env.MYSQL_DATABASE,
    MYSQL_U
} = process.env