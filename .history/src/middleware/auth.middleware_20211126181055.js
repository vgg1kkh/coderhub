
const errorTypes = require("../app/constants/errorTypes")
const verifyLogin = (ctx,next)=>{

    const {username,password} = ctx.request.body 
    // verify if username and password is null
    if(!username || !password) {
        return ctx.app.emit('error',new Error(errorTypes.USERNAME_OR_PASSWORD_IS_NOT_VALID))
    }
}

module.exports = { verifyLogin }