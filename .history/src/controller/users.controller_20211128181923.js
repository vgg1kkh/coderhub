
//service is an object of Class Service
const service = require("../service/user.service")

class UserController {
    async create(ctx,next){
        //get the params from user
        const user = ctx.request.body
        // database query
        const result = await service.create(user)

        console.log("UserCreationResult=",result)

        // return data
        ctx.response.body = result
    }

    async detail(id){
        const {id} = ctx.request.query
        console.log(object)
    }
}

module.exports = new UserController