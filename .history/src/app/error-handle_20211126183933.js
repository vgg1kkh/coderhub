const errorTypes = require("./constants/errorTypes");

const errorHandler = (error, ctx) => {
  console.log(error.message);
  // ctx.status = 404
  // ctx.response.body = "There are some errors."
  switch (error.message) {
    case errorTypes.USERNAME_OR_PASSWORD_IS_NOT_VALID:
      ctx.status = 400; //Bad request
      ctx.response.body = "Username or Password can't be empty.";
      break;
    case errorTypes.USERNAME_ALREADY_EXISTS:
      ctx.status = 409; //Bad request
      ctx.response.body = "Username already exists.";
      break;
    case errorTypes.USERNAME_DOESNOT_EXISTS:
      ctx.status = 409; //Bad request
      ctx.response.body = "Username doesn't exist.";
    case errorTypes.BAD_PASSWORD:
      ctx.status = 400; //Bad request
      ctx.response.body = "Bad password.";
      break;
    default:
      ctx.status = 404;
      ctx.response.body = "Page not found.";
      break;
  }
};

module.exports = errorHandler;
