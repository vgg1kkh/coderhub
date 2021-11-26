const mysql = require('mysql2')
const env = require('../app/config')


const connections = mysql.createPool({
    host:env.HOST,
    database:env.DATABASE,
    port:env.PORT,
    user:env.USERNAME,
    password:env.PASSWORD,
    connectionLimit: 5
})

connections.getConnection((err,conn)=>{
    conn.connect((err)=>{
        if (err) {
            console.log("连接失败:", err);
          } else {
            console.log("数据库连接成功~");
          }
    })
})

exports.module



