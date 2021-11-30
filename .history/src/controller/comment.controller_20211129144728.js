const { context } = require("../app")

class CommentController {
    async create(ctx,next){

        
        ctx.body="Comment is created."
    }
}

module.exports = new CommentController()