const mysql = require('mysql2')
const env = require('../app/config')

console.log("env",env.MYSQL_HOST)
const connections = mysql.createPool({
    host:MYSQL_HOST,
    database:env.MYSQL_DATABASE,
    port:env.MYSQL_PORT,
    user:env.MYSQL_USERNAME,
    password:env.MYSQL_PASSWORD,
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

exports.module = connections.promise()



