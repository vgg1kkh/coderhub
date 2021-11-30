const Router = require("koa-router");
const { verifyAuth,verifyPermission } = require("../middleware/auth.middleware");
const { create,reply,update, } = require("../controller/comment.controller");

const commentRouter = new Router({ prefix: "/comment" });

commentRouter.post("/", verifyAuth, create);
commentRouter.patch("/:Id",verifyAuth,verifyPermission("comment"),update)
commentRouter.post("/:Id/reply",verifyAuth,verifyPermission("comment"),reply)
commentRouter.remove("/:Id",verifyAuth,verifyPermission("comment"),remove)


module.exports = commentRouter
