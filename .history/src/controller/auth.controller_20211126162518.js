const { context } = require("../app")

class authController {
   async login(ctx,next){
        const {name} = ctx.request.body
        ctx.res.body
   }
}

module.exports = new authController()