const errorTypes = require("../app/constants/errorTypes");
const userService = require("../service/user.service");
const md5password

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
  console.log(user)
  if (!user) {
    // console.log("in the logic of verify if username already exists")
    return ctx.app.emit(
      "error",
      new Error(errorTypes.USERNAME_DOESNOT_EXISTS),
      ctx
    );
  }
  
  // verify if the password is the same


  await next();
};

module.exports = { verifyLogin };
