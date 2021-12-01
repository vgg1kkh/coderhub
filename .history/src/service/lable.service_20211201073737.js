const connections = require("../app/database")
const lableRouter = require("../router/lable.router")

class lableSerrvice {
    async create(name){
        const statement = `insert into label (name) values(?);`
        const [result] = await connections.execute(statement,[name])
        return result 
    }
}

module.exports = new labelService()