const Router = require("koa-router");
const { verifyAuth,verifyPermission } = require("../middleware/auth.middleware");
const { create,reply,update,remove,list } = require("../controller/comment.controller");

const commentRouter = new Router({ prefix: "/comment" });

commentRouter.post("/", verifyAuth, create);
commentRouter.patch("/:commentId",verifyAuth,verifyPermission,update)
commentRouter.post("/:commentId/reply",verifyAuth,reply) // any user can reply a comment
commentRouter.delete("/:commentId",verifyAuth,verifyPermission,remove)

//get the comments for a moment
commentRouter.get("/",list)

module.exports = commentRouter
