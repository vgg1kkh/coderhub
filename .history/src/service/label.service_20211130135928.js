const connections = require("../app/database")
const labelRouter = require("../router/label.router")

class labelService {
    async create(name){
        const statement = `insert into label`
    }
}

module.exports = new labelService()