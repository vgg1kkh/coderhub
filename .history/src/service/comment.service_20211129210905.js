const connections = require("../app/database")

class commentService{
    async create(comment,moment_id,id){
        const statement = "insert into comment (comment,moment_id,user_id) values(?,?,?);"
        const [result]=await connections.execute(statement,[comment,moment_id,id])
        return result
    }

    async reply(comment,moment_id,user_id,comment_id){
        const statement = "insert into comment (comment,moment_id,user_id,comment_id) values(?,?,?,?);"
        try{
            const [result]=await connections.execute(statement,[comment,moment_id,user_id,comment_id])
        }catch(error){
            
        }
        
        return result
    }
}

module.exports= new commentService()