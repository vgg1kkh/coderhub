const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware");
const { create } = require("../controller/comment.controller");

const commentRouter = new Router({ prefix: "/comment" });

commentRouter.post("/", verifyAuth, create);


ex
