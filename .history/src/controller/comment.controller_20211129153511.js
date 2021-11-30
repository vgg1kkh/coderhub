

class CommentController {
    async create(ctx,next){
        const {id} = ctx.user
        const {comment,moment_id} =ctx.request.body
        console.log(comment,moment_id,user)
        ctx.body="Comment is created."
    }

    await create(comment,moment_id,id)
}

module.exports = new CommentController()