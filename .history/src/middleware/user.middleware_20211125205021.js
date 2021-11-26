const verifyUser = (ctx,next)=>{

    

    await next()

}


module.exports = {
    verifyUser
}