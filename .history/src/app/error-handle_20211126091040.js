const errorHandler = (error,ctx) => {
    console.log(error.message)
    ctx.status = 404
    ctx.resp.message = 
}

module.exports = errorHandler