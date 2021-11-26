const mysql = require('mysql2')
const env = require('../app/config')


mysql.createPool({
    host:env.HOST,
    database:env.DATABASE,
    port
    
})

