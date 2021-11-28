const { context } = require("../app")
const {}

class authController {
   async login(ctx,next){
        const {username} = ctx.request.body
        ctx.response.body = `Login success, welcome back to ${username}`
   }
}
module.exports = new authController()