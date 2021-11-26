const verifyUser = (ctx,next)=>{

    const { username,password } = ctx.request.body

    //neither username nor password is null
    if(!username || !password || username = '' || password = ''){

    } 
    // ctx.response.status = 304
    // ctx.response.body = "Username or Password is empty"


    //username hasn't been registered


    await next()

}


module.exports = {
    verifyUser
}