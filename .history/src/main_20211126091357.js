const app = require("./app/index")
const config = require("./app/config")

//
const connections = require("./app/database")

app.listen(config.APP_PORT, ()=>{
    
    console.log(`the server @${config.APP_PORT} is up.`)
})