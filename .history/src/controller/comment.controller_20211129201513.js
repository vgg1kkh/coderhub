const {create}=require("../service/comment.service")

class CommentController {
    async create(ctx,next){
        const {id} = ctx.user
        const {comment,moment_id} =ctx.request.body
        console.log(comment,moment_id,id)
        const result = await create(comment,moment_id,id)
        ctx.body = result 
    }
    //reply a comment
    async reply(ctx,next){
        const { id } = ctx.user
        const {commentId} = ctx.request.params
        const {comment,moment_id} = ctx.request.body
        console.log("id,commentId,comment,moment_id",id,commentId,comment)
    }   
}

module.exports = new CommentController()