const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware");
const { create,reply,update } = require("../controller/comment.controller");

const commentRouter = new Router({ prefix: "/comment" });

commentRouter.post("/", verifyAuth, create);
commentRouter.patch("/:commentId",verifyAuth,verifyPermission,update)
commentRouter.post("/:commentId/reply",verifyAuth,reply)


module.exports = commentRouter
