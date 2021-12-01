const connections = require("../app/database")
const lablRouter = require("../router/lable.router")

class lableervice {
    async create(name){
        const statement = `insert into label (name) values(?);`
        const [result] = await connections.execute(statement,[name])
        return result 
    }
}

module.exports = new labelService()