const Router = require("koa-router");
const { verifyAuth,verifyPermission } = require("../middleware/auth.middleware");
const { create,reply,update,remove } = require("../controller/comment.controller");

const commentRouter = new Router({ prefix: "/comment" });

commentRouter.post("/", verifyAuth, create);
commentRouter.patch("/:Id",verifyAuth,verifyPermission("comment"),update)
commentRouter.post("/:Id/reply",verifyAuth,verifyPermission("comment"),reply)
commentRouter.delete("/:Id",verifyAuth,verifyPermission("comment"),remove)

//get a comment
commentRouter.get("/")

module.exports = commentRouter
