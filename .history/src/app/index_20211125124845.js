const Koa = require('koa')

const response = require('koa/lib/response')

const app =new Koa()

userRouter.post('/',(ctx,next)=>{
    ctx.response.body ="user is created."
})

app.use((ctx,next)=>{
// ctx.response.body ="hello world."
next()
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

module.exports = app;