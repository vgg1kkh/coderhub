const { create } = require("../service/label.service")

class LabelController {
    async create(ctx,next){
        ctx.body = "labe is created."
    }
}

module.exports = new LabelController()