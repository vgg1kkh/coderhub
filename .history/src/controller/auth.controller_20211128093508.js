const jwt = require("jsonwebtoken")

const { context } = require("../app")
const { PUBLIC_KEY,PRIVATE_KEY} = require("../app/config")


class authController {
   async login(ctx,next){
        const {id,name} = ctx.request.body
        const token = jwt.sign({id,name},)
        ctx.response.body = `Login success, welcome back to ${username}`
   }
}
module.exports = new authController()