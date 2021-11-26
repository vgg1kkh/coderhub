const {create} = require("../service/user.service")

class UserController {
    async create(ctx,next){
        //get the params from user

        // database query
        const result = await service.create(user)

        // return data
    }
}

module.exports = new UserController