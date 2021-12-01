const {checkLable,create}=require("../service/lable.service")

const verifyLableExists = async (ctx, next)=>{

    const {momentsId} = ctx.request.params
    console.log("momentsId=",momentsId)
    let lableAndMomentIds = []
    
    
    //遍历数组ES6
    for(let lable of ctx.request.body.lables){
        let lableMomentAndLableObj = {
            momentsId}
        const result = await checkLable(lable)
        console.log(object)
        // console.log("result in middleware =", result[0])
        if(!result){
           const result = await create(lable)
           console.log("result=",result)
           lableMomentAndLableObj.lableId = result.insertId
        }else{
            lableMomentAndLableObj.lableId = result[0].id
        }
        // console.log("lableMomentAndLableObj=", lableMomentAndLableObj)
        lableAndMomentIds.push(lableMomentAndLableObj)
        console.log(lableAndMomentIds)
    }

    await next();
}

module.exports = {
    verifyLableExists
}