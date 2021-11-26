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
        console.log("in user service")
        const statement = `insert into users (name,password) values (?,?)`
        const { username, password } = user
        // console.log(connections)
        const result = await connections.execute(statement,[username,password])
        // connections.execute(statement,[username, password]).then(([result,fields])=>{
        //     console.log(result)
        // })

        // connections.execute(statement,[username,password],(err,res)=>{
        //     console.log(res)
        // })
        console.log("DB opertation result:",result)
        return result
    }
    async getUsername(user)
}

module.exports = new UserService()