const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware");
const { create,reply } = require("../controller/comment.controller");

const commentRouter = new Router({ prefix: "/comment" });

commentRouter.post("/", verifyAuth, create);
commentRouter.post("/:commentid/reply",reply)


module.exports = commentRouter
