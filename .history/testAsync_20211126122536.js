const dotenv = require('dotenv')


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
    const result = await pool.promise().execute(statement)
    console.log("result=",result[0])
    console.log(process.env)
}
// const result = pool.promise().execute(statement)
// .then((res)=>console.log(res[0]))

dbOperation()