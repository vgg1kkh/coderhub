
const errorTypes = require("../app/constants/errorTypes")
const user


const verifyLogin = (ctx,next)=>{

    const {username,password} = ctx.request.body 
    // verify if username and password is null
    if(!username || !password) {   
    ctx.app.emit('error',new Error(errorTypes.USERNAME_OR_PASSWORD_IS_NOT_VALID),ctx)
    }
    // verify if username is exist



    await next();
}

module.exports = { verifyLogin }