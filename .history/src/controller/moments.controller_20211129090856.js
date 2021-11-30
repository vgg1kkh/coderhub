const {create,getMomentById,getMomentList}=require("../service/moments.service")

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
        // console.log(id)
        const result = await getMomentById(id)
        ctx.body = result
    }

    async list(ctx,next){
        const {limit,offset} = ctx.request.query
        console.log("limit,offset",limit,offset)
        const result = await getMomentList(limit,offset)
        ctx.body = result
    }

    async update(ctx,next){
        const {id} = ctx.params

        
    }

    
}

module.exports = new momentController()