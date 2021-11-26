const mysql = require('mysql2')

const statement = ` insert into users (name,password) values (?,?)`

const pool = mysql.createPool({
    host:'localhost',
    database:'coderhub',
    user:'root',
    password:'9r#N+ihF/bdDpHE',
    connectionLimit: 5  
})

pool.execute(statement,[],(err,res)=>{
    console.log(res)
})

class UserService {
    async create(user){
        console.log(user.n)
        return console.log("user creation is done.")
    }
}

module.exports = new UserService()