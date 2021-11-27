
const errorTypes = require("../app/constants")
const verifyLogin = (ctx,next)=>{

    const {username,password} = ctx.request.body 
    // verify if username and password is null
    if(!username || !password) {
        ctx.app.emit('error',new Error(errorTypes.USER))
    }
}

module.exports = { verifyLogin }