const { context } = require("../app")

class LabelController {
    async create(){
        ctx.body = "labe is created."
    }
}

module.exports = new LabelController()