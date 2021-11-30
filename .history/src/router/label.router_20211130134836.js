const Router = require("koa-router")

require()


const labelRouter = new Router({prefix:'/label'})


labelRouter.post("/")



module.exports = labelRouter