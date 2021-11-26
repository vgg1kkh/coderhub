const verifyUser = (ctx,next)=>{

    const { username,password } = ctx.request.body

    //neither username nor password is null


    //username hasn't been registered

    await next()

}


module.exports = {
    verifyUser
}