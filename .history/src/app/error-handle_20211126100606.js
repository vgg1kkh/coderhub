const errorTypes = require("./constants/")


const errorHandler = (error,ctx) => {
    console.log(error.message)
    ctx.status = 404
    ctx.response.body = "There are some errors." 
}

module.exports = errorHandler