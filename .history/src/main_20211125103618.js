const app = require("./app/index")
const env = require("./app/config")

app.listen(8000, ()=>{
    console.log("the server @8000 is up.")
})