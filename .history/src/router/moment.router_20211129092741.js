const Router = require("koa-router");

const { verifyAuth } = require("../middleware/auth.middleware");
const { create,detail,list,update } = require("../controller/moments.controller");

const momentRouter = new Router({ prefix: "/moments" });

momentRouter.post("/", verifyAuth, veri create);

//get all the moments
momentRouter.get("/",list)

//get the detail of a moment
momentRouter.get("/:id",detail)

//update a moment
momentRouter.patch("/:momentId",verifyAuth,update)

module.exports = momentRouter;
 