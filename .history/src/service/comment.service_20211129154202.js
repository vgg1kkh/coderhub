const connections = require("../app/database")

class commentService{
    async create(comment,moment_id,id){
        const statement = "insert into comment (comment,moment_id,id) values(?,?,?);"
        const [result]=await connections.execute(statement,[comment,moment_id,id])
        return result
    }
}

module.exports