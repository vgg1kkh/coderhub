

const env = require("dotenv")

env.config()

// console.log(process.env.APP_PORT)

module.exports = {
    APP_PORT,
    MYSQL_HOST,
    

} = process.env