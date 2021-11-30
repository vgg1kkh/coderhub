const Router = require("koa-router");

const { verifyAuth,verifyPermission } = require("../middleware/auth.middleware");
const { create,detail,list,update,remove } = require("../controller/moments.controller");

const momentRouter = new Router({ prefix: "/moments" });

momentRouter.post("/", verifyAuth, create);

//get all the moments
momentRouter.get("/",list)

//get the detail of a moment
momentRouter.get("/:id",detail)

//update a moment
momentRouter.patch("/:momentId",verifyAuth,verifyPermission("moments"),update)

//remove a moment
momentRouter.delete("/:momentId",verifyAuth,verifyPermission("moments"),remove)


//add labels for moment
momentRouter.post('/:momnetId/labels',verifyAuth,verifyPermission,)
module.exports = momentRouter;
 