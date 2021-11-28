const Router = require('koa-router')

const authRouter = new Router({prefix: '/login'})

const { login } = require('../controller/auth.controller')

const { verifyLogin, verifyAuth } = require('../middleware/auth.middleware')

authRouter.post('/',verifyLogin,login)

authRouter.get('/test',verifyAuth, )

module.exports = authRouter
