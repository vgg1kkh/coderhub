const errorTypes = require("./constants/errorTypes")


const errorHandler = (error,ctx) => {
    // console.log(error.message)
    // ctx.status = 404
    // ctx.response.body = "There are some errors." 
    switch(error.message){
        case errorTypes.USERNAME_OR_PASSWORD_IS_NOT_VALID:
            ctx.status = 404;
            break;
        default:
            
    }
}

module.exports = errorHandler