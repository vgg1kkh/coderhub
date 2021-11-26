const dotenv = require('dotenv')


const mysql = require('mysql2')

const {MYSQL_HOST,MYSQL_PORT,MYSQL_USERNAME,MYSQL_PASSWORD,MYSQL_DATABASE} = process.env

dotenv.config()
console.log(MYSQL_HOST)
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
    // console.log("result=",result[0])
    // console.log(process.env)
    
}
// const result = pool.promise().execute(statement)
// .then((res)=>console.log(res[0]))

dbOperation()