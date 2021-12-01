const Router = require("koa-router")

const {create} = require("../controller/lable.controller")
const { verifyLableExists } = require("../middleware/lable.middleware")


const lableRouter = new Router({prefix:'/lable'})


lableRouter.post("/",verifyLableExists,create)



module.exports = lableRouter