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
  async getMomentList(limit,offset){
    const statement = `${sqlFrament}
    limit ? offset ?;
    `;
    const result = await connections.execute(statement, [limit,offset]);
    return result[0];
  }

  async update()
}

module.exports = new momentsService();
