const Koa = require('koa')
const Router = require("koa-router")

const app =new Koa()
const router = new Router({prefix: '/users'})

router.get('/',)

module.exports = app;