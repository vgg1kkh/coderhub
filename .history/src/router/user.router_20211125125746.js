const Router = require("koa-router")
require("../controller/users.controller")

const userRouter = new Router({prefix: '/users'})
userRouter.get('/',(ctx,next)=>{
    ctx.response.body = "User List."
})
userRouter.post('/',(ctx,next)=>{
    ctx.response.body ="user is created."
})

module.exports = userRouter