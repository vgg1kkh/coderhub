const fs = require("fs")
const path = require("path")
const env = require("dotenv")

env.config()

const PUBLIC_KEY = fs.readFileSync();
const PRIVATE_KEY =fs.readFileSync();


// module.exports = {
//     MYSQL_DATABASE:process.env.MYSQL_DATABASE,
//     MYSQL_USERNAME: process.env.MYSQL_USERNAME,
//     MYSQL_PASSWORD:process.env.MYSQL_PASSWORD,
//     MYSQL_HOST: process.env.MYSQL_HOST,
//     APP_PORT : process.env.APP_PORT
// }
module.exports = {
    MYSQL_DATABASE,
    MYSQL_USERNAME,
    MYSQL_PASSWORD,
    MYSQL_HOST,
    APP_PORT
}= process.env