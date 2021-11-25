const Koa = require('koa')

const app =new Koa()

app.listen(8000, ()=>{
    console.log("the server @8000 is up.")
})