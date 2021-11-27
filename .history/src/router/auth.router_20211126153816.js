const Router = require('koa-router')

const authRouter = new Router({
    prefix: '/login'
})

const { login } = require('../')
