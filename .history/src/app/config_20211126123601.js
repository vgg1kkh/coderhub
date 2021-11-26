const env = require("dotenv")

env.config()


module.exports = {
    my:process.env.MYSQL_DATABASE,
} = process.env