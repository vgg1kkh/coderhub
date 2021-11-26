const app = require("./app/index")
const connections = require("")
const config = require("./app/config")

app.listen(config.APP_PORT, ()=>{
    console.log(`the server @${config.APP_PORT} is up.`)
})