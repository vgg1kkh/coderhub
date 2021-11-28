const connections = require("../app/database")

class momentController {
    async create(ctx,next){
        // get the user id
        const id = ctx.user.id
        // console.log(id)
        const content = ctx.request.body.content
        // console.log(content)
        const statement = `insert into moments (content, user_id) values (?,?);`
        connections.execute()
    }
}

module.exports = new momentController()