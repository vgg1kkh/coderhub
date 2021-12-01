const connections = require("../app/database")
const labelRouter = require("../router/lable.router")

class labervice {
    async create(name){
        const statement = `insert into label (name) values(?);`
        const [result] = await connections.execute(statement,[name])
        return result 
    }
}

module.exports = new labelService()