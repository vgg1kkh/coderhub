const errorHandler = (error,ctx) => {
    console.log(error.message)
    ctx.status = 404
    ctx.status.message = 
}

module.exports = errorHandler