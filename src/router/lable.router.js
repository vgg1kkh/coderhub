const Router = require("koa-router")

const {create} = require("../controller/label.controller")


const lableRouter = new Router({prefix:'/lable'})


lableRouter.post("/",create)



module.exports = lableRouter