

class CommentController {
    async create(ctx,next){
        const {name} = ctx.user
        const {comment,moment_id} =ctx.request.body
        console.log(comment,moment_id,user)
        ctx.body="Comment is created."
    }

    await create(commne)
}

module.exports = new CommentController()