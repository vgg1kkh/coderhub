class UserService {
    async create(user){
        return console.log("user creation is done.")
    }
}

module.exports = new UserService()