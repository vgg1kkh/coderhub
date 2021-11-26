require()





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
        const statement = ` insert into users (name,password) values (?,?)`
        const { username, password } = user
        pool.execute(statement,[username, password],(err,res)=>{
            console.log(err,res)
        })

        return console.log("user creation is done.")
    }
}

module.exports = new UserService()