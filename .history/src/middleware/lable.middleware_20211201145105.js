const verifyLableExists = async (ctx, next)=>{

    //遍历数组

    await next();
}

module.exports = {
    verifyLableExists
}