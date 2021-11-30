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
            return result
        }catch(error){
            console.log(error)
        }         
    }

    async update(commentId,content){
        const statement = `update comment set comment = ? where id = ?`
        const [result] = await connections.execute(statement,[content,commentId])
        return result 
    }

    async remove(Id){
        const statement = `dele`
    }
}

module.exports= new commentService()