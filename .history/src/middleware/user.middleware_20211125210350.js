const verifyUser = (ctx,next)=>{

    const { username,password } = ctx.request.body

    //neither username nor password is null
    if(!username || !password) 
    ctx.response.body = "Username or Password is em"


    //username hasn't been registered


    await next()

}


module.exports = {
    verifyUser
}