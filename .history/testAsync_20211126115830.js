const mysql = require('mysql2')

const connection = mysql.createP({
    host:'localhost',
    database:'coderhub',
    user:'root',
    password:'9r#N+ihF/bdDpHE'
})
const statement= `select * from users`
connection.execute(statement,(err,result)=>{
    console.log(result)
})