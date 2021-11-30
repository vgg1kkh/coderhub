const jwt = require("jsonwebtoken");


const { PRIVATE_KEY } = require("../app/config");

class authController {
  async login(ctx, next) {
    const { id, name } = ctx.user;
    console.log(id,name)
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 48,
      algorithm: "RS256"
    });

    ctx.response.body = {
        id,
        name,
        token
    }
  }

  async success(ctx,next){

  }
}
module.exports = new authController();
