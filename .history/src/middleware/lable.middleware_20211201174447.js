const {}=require("../service/lable.service")

const verifyLableExists = async (ctx, next)=>{

    //遍历数组ES6
    for(let lable of ctx.request.body.lables){
        
    }

    await next();
}

module.exports = {
    verifyLableExists
}