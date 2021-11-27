const verifyLogin = (ctx,next)=>{

    const {username,password} = ctx.request.body 
    console.log(username,password)
}

module.exports = { verifyLogin }