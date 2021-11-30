const connections = require("../app/database")

class commentService{
    async create(comment,moment_id,id){
        const statement = "insert into comment (comment,moment_id,id) values(?,?,?);"
        connections.execute(statement,)
    }
}