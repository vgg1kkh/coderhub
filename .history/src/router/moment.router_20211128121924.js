const Router = require("koa-router");

const {verifyAuth} = require("../middleware/auth.middleware")
cosnt moment

const momentRouter = new Router({prefix:"/moment"})

momentRouter.post("/",verifyAuth,(ctx,next)=>{

    ctx.body = "New Moment release."
})

module.exports = momentRouter