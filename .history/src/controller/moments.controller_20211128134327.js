class momentController {
    async create(ctx,next){
        // get the user id
        const id = ctx.user.id
        console.log(id)
        const content = ctx.request.body.content
        console.log(ctx.body)
    }
}

module.exports = new momentController()