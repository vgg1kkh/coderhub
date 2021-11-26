const Router = require("koa-router")
const { create } = require("../controller/users.controller")
const {verifyUser} = require("../middleware/user.middleware")
const userRouter = new Router({prefix: '/users'})
userRouter.get('/',(ctx,next)=>{
    ctx.response.body = "User List."
})
userRouter.post('/',create)

module.exports = userRouter