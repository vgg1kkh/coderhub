const service = require("../service/user.service")

class UserController {
    async create(ctx,next){
        //get the params from user
        consconsole.log(ctx.request.body)

        // database query
        const result = await service.create(user)

        // return data
        ctx.response.body = result
    }
}

module.exports = new UserController