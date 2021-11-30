const connections = require("../app/database");

const sqlFrament = `
    select m.id,m.content,m.createAt createTime,m.updateAt updateTime,
        JSON_OBJECT('id', u.id,'name',u.name) author
        from moments m
        inner JOIN users u on m.user_id = u.id
`

class momentsService {
  async create(id, content) {
    // console.log("id,content=",id,content)
    const statement = `insert into moments (user_id,content) values (?,?);`;
    try {
      const [result] = await connections.execute(statement, [id, content]);
      // console.log("db operation result:",result)
      return result
    } catch (err) {
      console.log(err);
    }
  }

  async getMomentById(id) {
    const statement = `${sqlFrament}
        where m.id = ?;
        `;
    const result = await connections.execute(statement, [id]);
    return result[0][0];
  }
  async getMomentList(limit="5",offset="0"){
    // const statement = `${sqlFrament} limit ? offset ?;`;
    const statement=`select m.id,m.content,m.createAt createTime,m.updateAt updateTime,
    JSON_OBJECT('id', u.id,'name',u.name) author
    from moments m
    inner JOIN users u on m.user_id = u.id
    limit ? offset ?;`
    console.log("statement for getting the moments list:",statement)
    console.log("limit=",limit)
    const result = await connections.execute(statement,[limit,offset]);
    return result[0];
  }

  async update(momentId,content,tableName){
      console.log("tableName=")
    const statement = `UPDATE ${tableName} set content = ? where id = ?;`
    const [result] = await connections.execute(statement,[content,momentId])
    return result
  }

  async remove(momentId){
      console.log(`${momentId} is removed. `)
      const statement = `DELETE from moments where id = ?;`
      const [result] = await connections.execute(statement,[momentId])
      return result 
  }
}

module.exports = new momentsService();
