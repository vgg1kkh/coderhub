const Koa = require('koa')
const Router = require("koa-router")

const app =new Koa()
const userRouter = new Router({prefix: '/users'})

userRouter.get('/',(ctx,next)=>{
    ctx.response.body = "User is created successfully."
})

app.use(userRouter.r)

module.exports = app;