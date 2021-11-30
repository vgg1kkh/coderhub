const Router = require("koa-router")

require("../controller/")


const labelRouter = new Router({prefix:'/label'})


labelRouter.post("/")



module.exports = labelRouter