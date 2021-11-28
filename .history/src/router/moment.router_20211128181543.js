const Router = require("koa-router");

const { verifyAuth } = require("../middleware/auth.middleware");
const { create } = require("../controller/moments.controller");

const momentRouter = new Router({ prefix: "/moments" });

momentRouter.post("/", verifyAuth, create);

//get the detail of a moment
momentRouter.g

module.exports = momentRouter;
 