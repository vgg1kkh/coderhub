const fs = require("fs")

const register = (app) => {
    fs.readdirSync(__dirname).forEach((file)=>{
        if(file==='index.js') return 
        const router = require(``)
    })
}