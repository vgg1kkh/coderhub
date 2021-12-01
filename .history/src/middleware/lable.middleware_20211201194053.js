const {checkLable,create}=require("../service/lable.service")

const verifyLableExists = async (ctx, next)=>{

    const {momentsId} = ctx.request.params
    console.log("momentsId=",momentsId)
    let lableAndMomentIds = []
    
    }
    //遍历数组ES6
    for(let lable of ctx.request.body.lables){
        
        
        const result = await checkLable(lable)
        if(!result){
           const result = await create(lable)
        }else{
            lableMomentAndLableObj.lableId = result.id
        }
    }

    await next();
}

module.exports = {
    verifyLableExists
}