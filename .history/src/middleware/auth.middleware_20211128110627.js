const jwt = require("jsonwebtoken")

const errorTypes = require("../app/constants/errorTypes");
const userService = require("../service/user.service");
const md5password = require("../utils/password-handle")
const {PUBLIC_KEY} = require("../app/config")
const errorTypes = require("../app/constants/errorTypes")

const verifyLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  // verify if username and password is null
  if (!username || !password) {
    return ctx.app.emit(
      "error",
      new Error(errorTypes.USERNAME_OR_PASSWORD_IS_NOT_VALID),
      ctx
    );
  }
  // verify if username is exist

  const result = await userService.getUsername(username);
  const user = result[0]
  console.log("user=",user)
  
  if (!user) {
    // console.log("in the logic of verify if username already exists")
    
    return ctx.app.emit(
      "error",
      new Error(errorTypes.USERNAME_DOESNOT_EXISTS),
      ctx
    );
  }
  
  // verify if the password is the same
  if(md5password(password)!==user.password)
  return ctx.app.emit('error',new Error(errorTypes.BAD_PASSWORD),ctx)
  
  ctx.user = user
  
  await next();
};

const verifyAuth = async (ctx,next) => {

    //take out the authorization
    const authorization = ctx.headers.authorization
    if(!authorization){
     return ctx.app.emit('error', new Error(errorTypes.AUTHORIZATION_FAILURE) ,ctx)
    }
    const token = authorization.replace("Bearer ","")

    // 
}

module.exports = { verifyLogin,verifyAuth };
