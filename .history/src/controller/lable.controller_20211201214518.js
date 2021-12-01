const { create } = require("../service/lable.service")

class LabelController {
    async create(ctx,next){
        const result = await create(ctx.request.body.name)
        return ctx.body = result 
    }
    async addLables()
}

module.exports = new LabelController()