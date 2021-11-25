const app = require("./app/index")
const config = require("./app/config")

app.listen(config.APP_PORT, ()=>{
    console.log(`the server @8000 is up.`)
})