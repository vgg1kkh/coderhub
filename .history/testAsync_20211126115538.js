const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    database:'coderhub',
    user:'root',
    password:'9r#N+ihF/bdDpHE'
})
const statemet= `select * from users`
connection.execute(statement,(err,result)=>{
    clg
})