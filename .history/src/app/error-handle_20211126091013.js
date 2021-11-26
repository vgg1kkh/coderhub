const errorHandler = (error,ctx) => {
    console.log(error.message)
    ctx.staus = 404
    ctx.
}

module.exports = errorHandler