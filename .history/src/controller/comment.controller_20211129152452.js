const { context } = require("../app")

class CommentController {
    async create(ctx,next){

        const {ctx.request.body
        ctx.body="Comment is created."
    }
}

module.exports = new CommentController()