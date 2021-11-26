const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    database:'coderhub',
    user:'root',
    password:'9r#N+ihF/bdDpHE',
    connectionLimit:5
})
const statement= `select * from users`
async function dbOperation(){

}
const result = pool.promise().execute(statement)