const Router = require('koa-router')

const authRouter = new Router({prefix: '/login'
})

const { login } = require('../controller/auth.controller')

authRouter.post('/',(ctx,next)=>{
    ctx.request.body = "Welcome back."
    
})


module.exports = authRouter
