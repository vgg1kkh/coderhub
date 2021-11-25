

const env = require("dotenv")

env.config()

console.log(process.env.APP)



module.exports = {
    APP_PORT
} = process.env