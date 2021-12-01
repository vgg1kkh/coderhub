const connections = require("../app/database")
const lableRouter = require("../router/lable.router")

class lableService {
    async create(name){
        const statement = `insert into lable (name) values(?);`
        const [result] = await connections.execute(statement,[name])
        return result 
    }

    async checkLable(lable){
        const statement = `se`
    }
}

module.exports = new lableService()