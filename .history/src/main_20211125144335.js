const app = require("./app/index")
con
const config = require("./app/config")

app.listen(config.APP_PORT, ()=>{
    console.log(`the server @${config.APP_PORT} is up.`)
})