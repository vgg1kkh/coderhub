const Router = require("koa-router")

const {create} = require("../controller/lable.controller")


const lableRouter = new Router({prefix:'/lable'})


lableRouter.post("/",verifycreate)



module.exports = lableRouter