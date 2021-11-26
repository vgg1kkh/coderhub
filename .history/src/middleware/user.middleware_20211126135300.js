const errorTypes =require("../app/constants/errorTypes")
const userService = require("../service/user.service")
const m

const verifyUser = async (ctx,next)=>{

    const { username,password } = ctx.request.body

    // console.log("@",username,password)

    //neither username nor password is null
    if(!username || !password){
        // console.log("in the body of wrong input")
        const errorObj = new Error(errorTypes.USERNAME_OR_PASSWORD_IS_NOT_VALID)
        return ctx.app.emit('error',errorObj,ctx)
    } 
    // ctx.response.status = 304
    // ctx.response.body = "Username or Password is empty"


    // username has been registered
    // need to use await until the result comes back
    const result = await userService.getUsername(username)
    // console.log(result)
    if(result.length){
        // console.log("in the logic of verify if username already exists")
        return ctx.app.emit('error',new Error(errorTypes.USERNAME_ALREADY_EXISTS),ctx)
    }

    await next()
}

const handlePassword = (ctx,next)=>{
    const { password } = ctx.request.body
    ctx.request.body.password = md5password(password)
    await next()
}


module.exports = {
    verifyUser,
    handlePassword
}