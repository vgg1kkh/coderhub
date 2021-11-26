const errorTypes=require("../app/constants/errorTypes")

const verifyUser = async (ctx,next)=>{

    const { username,password } = ctx.request.body

    console.log("@",username,password)

    //neither username nor password is null
    if(!username || !password || username === '' || password === ''){
        console.log("in the body of wrong input")
        const errorObj = new Error(USERNAME_OR_PASSWORD_IS_NOT_VALID)
        return ctx.app.emit('error',errorObj,ctx)
    } 
    // ctx.response.status = 304
    // ctx.response.body = "Username or Password is empty"


    //username hasn't been registered


    // await next()

}


module.exports = {
    verifyUser
}