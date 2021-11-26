const verifyUser = (ctx,next)=>{

    ctx.request.body

    await next()

}


module.exports = {
    verifyUser
}