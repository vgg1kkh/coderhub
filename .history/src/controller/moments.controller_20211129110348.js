
const { context } = require("../app")
const {create,getMomentById,getMomentList,update}=require("../service/moments.service")

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
        const {limit=5,offset=0} = ctx.request.query
        console.log("limit,offset",limit,offset)
        const result = await getMomentList(limit,offset)
        ctx.body = result
    }

    async update(ctx,next){
        const {momentId} = ctx.params
        const {content} = ctx.request.body
        // const {id} = ctx.user
        // console.log("moment controller",id,momentId)
        // console.log("the momentId & content in moment controller", momentId,content)
        
        // const result = await checkMoment(id,momentId)
        const result = await update(momentId,content)
        console.log("reult in moment controller",result)
        ctx.body = result
    }

    
}

module.exports = new momentController()