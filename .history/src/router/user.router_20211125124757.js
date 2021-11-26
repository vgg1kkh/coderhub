const userRouter = new Router({prefix: '/users'})
userRouter.get('/',(ctx,next)=>{
    ctx.response.body = "User List."
})
userRouter.post('/',(ctx,next)=>{
    ctx.response.body ="user is created."
})