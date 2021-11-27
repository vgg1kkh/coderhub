const Koa = require('koa')
const bordyPaerser = require('koa-bodyparser')
const userRouter = require('../router/user.router')
const authRouter = require('../router/auth.router')
const errorHandler = require('../app/error-handle')
const register = require("../router/index")



// const response = require('koa/lib/response')

const app =new Koa()

app.use(bordyPaerser())


// app.use((ctx,next)=>{
// // ctx.response.body ="hello world."
// next()
// })

register(app) //register all the 

// app.use(userRouter.routes())
// app.use(userRouter.allowedMethods())

// app.use(authRouter.routes())
// app.use(authRouter.allowedMethods())

app.on('error',errorHandler)

module.exports = app;