const service = require("../service/user.service")

class UserController {
    async create(ctx,next){
        //get the params from user
        const user = ctx.request.body
        console.log(user)

        // database query
        const result = await service.create(user)

        // return data
        ctx.response.body = 
    }
}

module.exports = new UserController