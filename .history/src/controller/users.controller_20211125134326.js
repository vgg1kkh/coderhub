const service = require("../service/user.service")

class UserController {
    async create(ctx,next){
        //get the params from user
        console.log(object)

        // database query
        const result = await service.create(user)

        // return data
        ctx.response.body = result
    }
}

module.exports = new UserController