const verifyUser = (ctx,next)=>{

    const { username,password } = ctx.request.body

    //neither 

    await next()

}


module.exports = {
    verifyUser
}