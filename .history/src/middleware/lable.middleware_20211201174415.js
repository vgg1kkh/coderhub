const verifyLableExists = async (ctx, next)=>{

    //遍历数组ES6
    for(let lable of ctx.request.body.lables){
        lable 
    }

    await next();
}

module.exports = {
    verifyLableExists
}