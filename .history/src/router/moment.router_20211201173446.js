const Router = require("koa-router");

const { verifyAuth,verifyPermission } = require("../middleware/auth.middleware");

const { verifyLableExists}

const { create,detail,list,update,remove, addLables } = require("../controller/moments.controller");

const momentRouter = new Router({ prefix: "/moments" });

momentRouter.post("/", verifyAuth, create);

//get all the moments
momentRouter.get("/",list)

//get the detail of a moment
momentRouter.get("/:id",detail)

//update a moment
/**
 * requirement: the user should login and the moment is created by the same user.
 */
momentRouter.patch("/:momentsId",verifyAuth,verifyPermission,update)

//remove a moment
momentRouter.delete("/:momentsId",verifyAuth,verifyPermission,remove)


//add labels for moment
momentRouter.post('/:momentsId/lables',verifyAuth,verifyLableExists,addLables)
module.exports = momentRouter;
 