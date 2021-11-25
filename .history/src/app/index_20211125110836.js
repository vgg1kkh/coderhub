const Koa = require('koa')
const Router = require("koa-router")

const app =new Koa()
const router = new Router({prefix: '/users'})

router.get('/',(ctx,next)=>{
    ctx.response.body = "User is created successfully."
})

app.use(router)
module.exports = app;