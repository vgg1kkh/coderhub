const connections = require("../app/database");

class authService {
  async checkResource(user_id,id,tableName) {
    // console.log("in checkResource of auth service, userId, Id,tableName", user_id, id,tableName);
    const statement = `select * from ${tableName} where id = ? and user_id =?;`;
    const [result] = await connections.execute(statement, [id, user_id]);
    // console.log("result in checkMoment:",result)
    return result.length ? true : false;
  }
}

module.exports = new authService();
