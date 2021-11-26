const mysql = require('mysql2')
const env = require('../app/config')


const connection = mysql.createPool({
    host:env.HOST,
    database:env.DATABASE,
    port:env.PORT,
    user:env.USERNAME,
    password:env.PASSWORD,
    connectionLimit: 5
})

connection.co



