const Router = require("koa-router");

const {verifyAuth} = require("../middleware/auth.middleware")

const momentRouter = new Router({prefix:"/moment"})

momentRouter.post("/",(ctx,next)=>{

    ctx.body = "New Moment release."
})

module.exports = momentRouter