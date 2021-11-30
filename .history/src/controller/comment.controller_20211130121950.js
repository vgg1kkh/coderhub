const {create, reply,update,remove }=require("../service/comment.service")

class CommentController {
    async create(ctx,next){
        const {id} = ctx.user
        const {content,moment_id} =ctx.request.body
        // console.log(content,moment_id,id)
        const result = await create(content,moment_id,id)
        ctx.body = result 
    }
    //reply a comment
    async reply(ctx,next){
        const { id } = ctx.user
        const {Id} = ctx.request.params
        const {content,moment_id} = ctx.request.body
        // console.log("id,commentId,content,moment_id",id,Id,content,moment_id)
        const result = await reply(content,moment_id,id,Id)
        ctx.body = result
    }  
    
    async update(ctx,next){
        const {Id} = ctx.request.params
        const {content} =ctx.request.body
        
        // console.log(commentId,content)
        const result = await update(Id,content)
        ctx.body = result 
    }

    async remove(ctx,next){
        const {Id}=ctx.request.params
        const result = await remove(Id)
        ctx.body = result
    }

    async list(ctx,next){
        const {moment_id} = ctx.request.query
        const result = await getCommentsBy
    }
}

module.exports = new CommentController()