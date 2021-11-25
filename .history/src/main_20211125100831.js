const Koa = require('koa')

const app =new Koa()

app.listen(8888, ()=>{
    console.log("the server is up.")
})