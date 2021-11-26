const Router = require("koa-router")
const { create } = require("../controller/users.controller")
const {verifyUser} = require("../middleware")
const userRouter = new Router({prefix: '/users'})
userRouter.get('/',(ctx,next)=>{
    ctx.response.body = "User List."
})
userRouter.post('/',verifyUser,create)

module.exports = userRouter