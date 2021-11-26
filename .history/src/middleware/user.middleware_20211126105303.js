const errorTypes =require("../app/constants/errorTypes")
const userService = require("../service/user.service")

const verifyUser = async (ctx,next)=>{

    const { username,password } = ctx.request.body

    console.log("@",username,password)

    //neither username nor password is null
    if(!username || !password){
        console.log("in the body of wrong input")
        const errorObj = new Error(errorTypes.USERNAME_OR_PASSWORD_IS_NOT_VALID)
        return ctx.app.emit('error',errorObj,ctx)
    } 
    // ctx.response.status = 304
    // ctx.response.body = "Username or Password is empty"


    //username has been registered
    const result = userService.getUsername(username)
    if(re)

    // await next()

}


module.exports = {
    verifyUser
}