

class CommentController {
    async create(ctx,next){

        const {comment,moment_id} =ctx.request.body
        console.log(comment,moment_id,)
        ctx.body="Comment is created."
    }
}

module.exports = new CommentController()