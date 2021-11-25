const app = require("./app/index")
const env = require("./app/config")

app.listen(env.A, ()=>{
    console.log("the server @8000 is up.")
})