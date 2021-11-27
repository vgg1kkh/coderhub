const verifyLogin = (ctx,next)=>{

    const {username,password} = ctx.request.body 
    // verify if username and password is null
    if(!username || !password) {
        ctx.response.
    }
}

module.exports = { verifyLogin }