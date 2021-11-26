const errorTypes = require("./")


const errorHandler = (error,ctx) => {
    console.log(error.message)
    ctx.status = 404
    ctx.response.body = "There are some errors." 
}

module.exports = errorHandler