const env = require("dotenv")

env.config()


module.exports = {
    DATABASE:process.env.MYSQL_DATABASE,
} = process.env