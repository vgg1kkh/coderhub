const Router = require("koa-router");

const { verifyAuth } = require("../middleware/auth.middleware");
const { create,detail } = require("../controller/moments.controller");

const momentRouter = new Router({ prefix: "/moments" });

momentRouter.post("/", verifyAuth, create);

//get all the moments
momentRouter.get("/",)

//get the detail of a moment
momentRouter.get("/:id",detail)

module.exports = momentRouter;
 