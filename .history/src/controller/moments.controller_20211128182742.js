const {create}=require("../service/moments.service")

class momentController {
    async create(ctx,next){
        // get the user id
        const id = ctx.user.id
        // console.log(id)
        const content = ctx.request.body.content
        // console.log(content)
        const result = await create(id,content)

        return result
         
    }

    async detail(ctx,next){
        const id = ctx.params.id
        console.log(id)
    }
}

module.exports = new momentController()