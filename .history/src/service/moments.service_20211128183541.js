const connections = require("../app/database")

class momentsService{
    async create(id,content){
        // console.log("id,content=",id,content)
        const statement = `insert into moments (user_id,content) values (?,?);`
        try{
            const [result] = await connections.execute(statement,[id,content])
            // console.log("db operation result:",result)
        }catch(err){
            console.log(err)
        }
    }

    async getMoment(id){
        const statement =`select * from moments where id = ?;`;
        const reawait connections.execute(statement,[id])
    }
}

module.exports = new momentsService()