const connections = require("../app/database")

class authService {
    async checkMoment(user_id,moment_id){
        console.log("in checkMoment, userId, momentId",user_id,moment_id)
        const statement = `select * from moments where id = ? and user_id =?;`
        const [result] = await connections.execute(statement,[moment_id,user_id])
        // console.log("result in checkMoment:",result)
        result.length? true:false
        
    }
}

module.exports= new authService()