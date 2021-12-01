const verifyLableExists = async (ctx, next)=>{

    //遍历数组ES6
    for(ctx.request.body.lables)

    await next();
}

module.exports = {
    verifyLableExists
}