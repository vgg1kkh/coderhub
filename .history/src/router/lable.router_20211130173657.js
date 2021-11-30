const Router = require("koa-router")

const {create} = require("../controller/label.controller")


const lableRouter = new Router({prefix:'/label'})


lableRouter.post("/",create)



module.exports = lableRouter