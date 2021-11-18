class V1UserController {
    async v1Login(ctx,next){
        return ctx.body = {
            msg:'登录成功'
        }
    }
}

module.exports = new V1UserController()