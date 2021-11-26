const errorHandler = (error,ctx) => {
    console.log(error.message)
    ctx.status = 404
    ctx.
}

module.exports = errorHandler