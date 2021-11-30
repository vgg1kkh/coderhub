const Koa = require('koa')
const process = require("process")
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

register(app) //register all the routes

// app.use(userRouter.routes())
// app.use(userRouter.allowedMethods())

// app.use(authRouter.routes())
// app.use(authRouter.allowedMethods())

app.on('error',errorHandler)

// process.on('warning', (warning) => {
//     console.warn(warning.name);    // 打印警告名称
//     console.warn(warning.message); // 打印警告信息
//     console.warn(warning.stack);   // 打印堆栈跟踪
//   });

module.exports = app;