class momentController {
    async create(ctx,next){
        // get the user id
        const id = ctx.user.id
        console.log(id)
        // const content = ctx.body.content
    }
}

module.exports = new momentController()