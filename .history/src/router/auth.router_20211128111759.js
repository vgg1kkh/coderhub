const Router = require('koa-router')

const authRouter = new Router({prefix: '/login'})

const { login, success } = require('../controller/auth.controller')

const { verifyLogin, verifyAuth } = require('../middleware/auth.middleware')

authRouter.post('/',verifyLogin,login)

authRouter.post('/test',verifyAuth, success)

module.exports = authRouter
