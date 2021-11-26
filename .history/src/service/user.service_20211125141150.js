const require('mysql2')

class UserService {
    async create(user){
        console.log(user)
        return console.log("user creation is done.")
    }
}

module.exports = new UserService()