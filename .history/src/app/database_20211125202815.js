const mysql = require('mysql2')
const config = require('../app/config')

const connections = mysql.createPool({
    host:config.MYSQL_HOST,
    database:config.MYSQL_DATABASE,
    port:config.MYSQL_PORT,
    user:config.MYSQL_USERNAME,
    password:config.MYSQL_PASSWORD,
    connectionLimit: 5
})


//test if the database connection is success
connections.getConnection((err,conn)=>{
    conn.connect((err)=>{
        if (err) {
            console.log("连接失败:", err);
          } else {
            console.log("数据库连接成功~");
          }
    })
})

module.exports = connections



