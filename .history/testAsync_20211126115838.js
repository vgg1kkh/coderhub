const mysql = require('mysql2')

const connection = mysql.createPool({
    host:'localhost',
    database:'coderhub',
    user:'root',
    password:'9r#N+ihF/bdDpHE',
    connectionLimit
})
const statement= `select * from users`
connection.execute(statement,(err,result)=>{
    console.log(result)
})