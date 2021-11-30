const connections = require("../app/database");

class authService {
  async checkResource(user_id, moment_id,tableName) {
    console.log("in checkMoment, userId, momentId", user_id, moment_id);
    const statement = `select * from ${tableName} where id = ? and user_id =?;`;
    const [result] = await connections.execute(statement, [moment_id, user_id]);
    // console.log("result in checkMoment:",result)
    return result.length ? true : false;
  }
}

module.exports = new authService();
