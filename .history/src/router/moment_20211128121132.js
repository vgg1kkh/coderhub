const Router = require("koa-router");

const momentRouter = new Router({prefix:"/moment"})

momentRouter.post("/",(ctx,authuser,next)=>{

    ctx.body = "New Moment release."
})

module.exports = momentRouter