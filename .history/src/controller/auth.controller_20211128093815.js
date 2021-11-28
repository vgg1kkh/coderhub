const jwt = require("jsonwebtoken")

const { context } = require("../app")
const { PUBLIC_KEY,PRIVATE_KEY} = require("../app/config")


class authController {
   async login(ctx,next){
        const {id,name} = ctx.request.body
        const token = jwt.sign({id,name},PRIVATE_KEY,{
            expiresIn:60*60*24,
            algorithm:"RS256"})
        ctx.response.body = {
            id,
            name,
            token
        }
   }
}
module.exports = new authController()