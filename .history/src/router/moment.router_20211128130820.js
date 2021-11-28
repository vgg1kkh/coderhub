const Router = require("koa-router");

const { verifyAuth } = require("../middleware/auth.middleware");
const { create } = require("../controller/moments.controller");

const momentRouter = new Router({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, create);

module.exports = momentRouter;
 