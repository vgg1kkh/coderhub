const connections = require("../app/database")

class momentsService{
    async create(id,content){
        const statement = `insert into moments (content, user_id) values (?,?);`
        try{
            const result = await connections.execute(statement,[id,content])
            console.log(result)
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = new momentsService()