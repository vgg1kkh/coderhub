const connections = require('../app/database')





// const pool = mysql.createPool({
//     host:'localhost',
//     database:'coderhub',
//     user:'root',
//     password:'9r#N+ihF/bdDpHE',
//     connectionLimit: 5  
// })



class UserService {
    async create(user){
        console.log(user)
        const statement = `insert into users (name,password) values (?,?)`
        const { username, password } = user
        console.log(connections)
        await connections.execute()
        // connections.execute(statement,[username, password]).then(([result,fields])=>{
        //     console.log(result)
        // })

        return console.log("user creation is done.")
    }
}

module.exports = new UserService()