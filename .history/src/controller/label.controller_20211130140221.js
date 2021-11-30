const { create } = require("../service/label.service")

class LabelController {
    async create(ctx,next){
        const result = await create()
    }
}

module.exports = new LabelController()