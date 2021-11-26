const Koa = require('koa')
const bordyPaerser = require('koa-bodyparser')
const userRouter = require('../router/user.router')
const errorHandler = require('../app/error-handle')

// const response = require('koa/lib/response')

const app =new Koa()

app.use(bordyPaerser())


// app.use((ctx,next)=>{
// // ctx.response.body ="hello world."
// next()
// })

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.on('error',error)

module.exports = app;