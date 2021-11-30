const { create } = require("../service/label.service")

class LabelController {
    async create(ctx,next){
        const result = await create(ctx.body.name)
        ctx.body = result 
    }
}

module.exports = new LabelController()