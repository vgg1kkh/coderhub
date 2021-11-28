const Router = require("koa-router");

const 

const momentRouter = new Router({prefix:"/moment"})

momentRouter.post("/",(ctx,verifyAuth,next)=>{

    ctx.body = "New Moment release."
})

module.exports = momentRouter