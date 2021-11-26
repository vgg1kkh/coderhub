const Koa = require('koa')
const Router = require("koa-router")
const response = require('koa/lib/response')

const app =new Koa()
const userRouter = new Router({prefix: '/users'})
userRouter.get('/',(ctx,next)=>{
    ctx.response.body = "User is created successfully."
})
userRouter.post('/',(ctx,next))

app.use((ctx,next)=>{
// ctx.response.body ="hello world."
next()
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

module.exports = app;