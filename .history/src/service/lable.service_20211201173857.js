const connections = require("../app/database")
const lableRouter = require("../router/lable.router")

class lableService {
    async create(name){
        const statement = `insert into lable (name) values(?);`
        const [result] = await connections.execute(statement,[name])
        return result 
    }

    async checkLable(lable){
        const statement = `select * from lable where name = ?;`
        const [result] = await connections.execute
    }
}

module.exports = new lableService()