

class CommentController {
    async create(ctx,next){

        const {comment,moment_id} =ctx.request.body
        ctx.body="Comment is created."
    }
}

module.exports = new CommentController()