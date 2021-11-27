const Router = require('koa-router')

const authRouter = new Router({prefix: '/login'})

const { login } = require('../controller/auth.controller')

const { verifyUser} = require('../')

authRouter.post('/',login)


module.exports = authRouter
