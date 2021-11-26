const verifyUser = (ctx,next)=>{

    const { username,password } = ctx.request.body

    //neither username nor password is 

    await next()

}


module.exports = {
    verifyUser
}