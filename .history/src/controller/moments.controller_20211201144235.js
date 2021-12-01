
const {
  create,
  getMomentById,
  getMomentList,
  update,
  remove,
} = require("../service/moments.service");

class momentController {
  async create(ctx, next) {
    // get the user id
    const id = ctx.user.id;
    // console.log(id)
    const content = ctx.request.body.content;
    // console.log(content)
    const result = await create(id, content);

    ctx.body = result;
  }

  async detail(ctx, next) {
    const id = ctx.params.id;
    // console.log(id)
    const result = await getMomentById(id);
    ctx.body = result;
  }

  async list(ctx, next) {
    let { limit, offset } = ctx.request.query;
    // limit = limit === undefined ? '4' :limit
    // offset = offset=== undefined ? '0': offset;
    console.log("limit,offset in moment controller", limit, offset);
    const result = await getMomentList(limit, offset);
    ctx.body = result;
  }

  async update(ctx, next) {
    const { momentsId } = ctx.params;
    const { content } = ctx.request.body;
    
    // const {id} = ctx.user
    // console.log("moment controller",id,momentId)
    // console.log("the momentId & content in moment controller", momentId,content)

    // const result = await checkMoment(id,momentId)
    const result = await update(momentsId, content);
    console.log("reult in moment controller", result);
    ctx.body = result;
  }

  async remove(ctx, next) {
    const { momentsId } = ctx.request.params;
    const tableName="moments"
    // const {id} = ctx.user
    const result = await remove(momentsId,tableName);
    ctx.body = result;
  }

  //add labels for moment
  async addLables(ctx,netx){
      
        ctx.body = "Lables added for moment."
  }
}

module.exports = new momentController();
