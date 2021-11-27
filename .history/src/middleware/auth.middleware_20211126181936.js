
const errorTypes = require("../app/constants/errorTypes")
const userService = require("../service/user.service")


const verifyLogin = (ctx,next)=>{

    const {username,password} = ctx.request.body 
    // verify if username and password is null
    if(!username || !password) {   
    ctx.app.emit('error',new Error(errorTypes.USERNAME_OR_PASSWORD_IS_NOT_VALID),ctx)
    }
    // verify if username is exist

    const result = await userService.getUsername(username)
    // console.log(result)
    if(result.length){
        // console.log("in the logic of verify if username already exists")
        return ctx.app.emit('error',new Error(errorTypes.USERNAME_ALREADY_EXISTS),ctx)
    }



    await next();
}

module.exports = { verifyLogin }