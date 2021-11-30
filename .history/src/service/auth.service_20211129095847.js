const connections = require("../app/database")

class authService {
    checkMoment(user_id,moment_id){
        console.log("in checkMoment, userId, momentId",user_id,moment_id)
        const statement = `select * from moments where id = ? and user_id =?;`
        const result = await connections.execute(statement,[moment_id,u])
        return true
    }
}

module.exports= new authService()