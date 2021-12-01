const {checkLable,create}=require("../service/lable.service")

const verifyLableExists = async (ctx, next)=>{

    const {momentsId} = ctx.request.params
    console.log("momentsId=",momentsID)

    //遍历数组ES6
    for(let lable of ctx.request.body.lables){
        let lableNameAndId = []
        let lableMomentAndLableObj
        const result = await checkLable(lable)
        if(!result){
           const result = await create(lable)
        }
    }

    await next();
}

module.exports = {
    verifyLableExists
}