const {create, reply}=require("../service/comment.service")

class CommentController {
    async create(ctx,next){
        const {id} = ctx.user
        const {content,moment_id} =ctx.request.body
        console.log(comment,moment_id,id)
        const result = await create(comment,moment_id,id)
        ctx.body = result 
    }
    //reply a comment
    async reply(ctx,next){
        const { id } = ctx.user
        const {commentId} = ctx.request.params
        const {content,moment_id} = ctx.request.body
        // console.log("id,commentId,content,moment_id",id,commentId,content,moment_id)
        const result = await reply(content,moment_id,id,commentId)
        ctx.body = result
    }  
    
    async update(ctx,next){
        const {commentId} = ctx.request.params
        const {content} =ctx.request.body
        // console.log(commentId,content)
        const result = 
    }
}

module.exports = new CommentController()