const Router = require("koa-router");
const { verifyAuth,verifyPermission } = require("../middleware/auth.middleware");
const { create,reply,update,remove,list } = require("../controller/comment.controller");

const commentRouter = new Router({ prefix: "/comment" });

commentRouter.post("/", verifyAuth, create);
commentRouter.patch("/:commentId",verifyAuth,verifyPermission,update)
commentRouter.post("/:commentId/reply",verifyAuth,verifyPermission,reply)
commentRouter.delete("/:Id",verifyAuth,verifyPermission,remove)

//get a comment
commentRouter.get("/",list)

module.exports = commentRouter
