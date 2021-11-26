const errorTypes = require("./constants/errorTypes")


const errorHandler = (error,ctx) => {
    console.log(error.message)
    // ctx.status = 404
    // ctx.response.body = "There are some errors." 
    switch(error.message){
        case errorTypes.USERNAME_OR_PASSWORD_IS_NOT_VALID:
            ctx.status = 400; //Bad request
            ctx.response.body = "Username or Password can't be empty."
            break;
        default:
            ctx.status = 404;
            ctx.response.body = "There are some errors."
            break;
    }
}

module.exports = errorHandler