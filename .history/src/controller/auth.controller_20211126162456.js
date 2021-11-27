class authController {
   async login(ctx,next){
        const {name} = ctx.request.body
   }
}

module.exports = new authController()