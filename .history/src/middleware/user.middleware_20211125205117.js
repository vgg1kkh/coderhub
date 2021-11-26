const verifyUser = (ctx,next)=>{

    const { username,password } = ctx.request.body

    await next()

}


module.exports = {
    verifyUser
}