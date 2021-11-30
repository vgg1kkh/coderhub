const Router = require("koa-router")
const { verifyAuth } = require("../middleware/auth.middleware")
const {}require("../controller/comment.controller")

const {verifyAuth}=require("../middleware/auth.middleware")
const commentRouter = new Router({prefix:"/comment"})


commentRouter.post("/",verifyAuth,create)