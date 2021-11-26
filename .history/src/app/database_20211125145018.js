const mysql = require('mysql2')
const config = require('../app/config')

console.log("env",env.MYSQL_HOST)
const connections = mysql.createPool({
    host:config.MYSQL_HOST,
    database:config.MYSQL_DATABASE,
    port:config.MYSQL_PORT,
    user:config.MYSQL_USERNAME,
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



