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
    const statement = `
    select m.id,m.content,m.createAt createTime,m.updateAt updateTime,
    JSON_OBJECT('id', u.id,'name',u.name) author,
    (select COUNT(*) from comment c where c.moment_id=m.id) as CommentCount
    from moments m
    inner JOIN users u on m.user_id = u.id
        where m.id = ?;
        `;
    const result = await connections.execute(statement, [id]);
    return result[0][0];
  }
  async getMomentList(limit="5",offset="0"){
    // const statement = `${sqlFrament} limit ? offset ?;`;
    const statement=`select m.id,m.content,m.createAt createTime,m.updateAt updateTime,
    JSON_OBJECT('id', u.id,'name',u.name) author,
    (select COUNT(*) from comment c where c.moment_id=m.id) as CommentCount
    from moments m
    inner JOIN users u on m.user_id = u.id
    limit ? offset ?;`
    // console.log("statement for getting the moments list:",statement)
    // console.log("limit=",limit)
    const result = await connections.execute(statement,[limit,offset]);
    return result[0];
  }

  async update(momentId,content){
    
    const statement = `UPDATE moments set content = ? where id = ?;`
    const [result] = await connections.execute(statement,[content,momentId])
    return result
  }

  async remove(momentId){
      console.log(`${momentId} is removed. `)
      const statement = `DELETE from moments where id = ?;`
      const [result] = await connections.execute(statement,[momentId])
      return result 
  }
  

//   { momentsId: '1', lableId: 1 },
//   { momentsId: '1', lableId: 2 },
//   { momentsId: '1', lableId: 10 },
//   { momentsId: '1', lableId: 11 }
   
  async addLables(lableAndMomentIds){
      console.log("lableAndMomentIds in moment service",lableAndMomentIds)
      for(let obj of lableAndMomentIds){
          const statement = `insert into moment_lable (moment_id,lable_id) values (?,?);`
          try{
            await connections.execute(statement,[obj.momentsId,obj.lableId])
          }catch(error){
          }       
      } 
  }


}

module.exports = new momentsService();
