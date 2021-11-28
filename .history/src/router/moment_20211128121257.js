const Router = require("koa-router");

const {verfiyAuth} = require("../middleware/auth.middleware")

const momentRouter = new Router({prefix:"/moment"})

momentRouter.post("/",(ctx,verifyAuth,next)=>{

    ctx.body = "New Moment release."
})

module.exports = momentRouter