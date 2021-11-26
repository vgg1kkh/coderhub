const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost'
})

class UserService {
    async create(user){
        console.log(user)
        return console.log("user creation is done.")
    }
}

module.exports = new UserService()