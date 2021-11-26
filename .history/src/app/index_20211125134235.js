const Koa = require('koa')
const bordyPaerser = require('ko')
const userRouter = require('../router/user.router')

const response = require('koa/lib/response')

const app =new Koa()

app.use()


app.use((ctx,next)=>{
// ctx.response.body ="hello world."
next()
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

module.exports = app;