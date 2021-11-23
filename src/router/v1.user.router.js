const Router = require("koa-router");

const router = new Router({ prefix: '/v1/users' })

const { v1Login } = require('../controller/v1.user.controller.js')
const { getOpenid, hasUserInfo, jwtTokenCheck } = require('../middleware/v1.user.middleware')

router.post('/login', getOpenid, hasUserInfo, v1Login) //小程序登录
// router.post('/login1', jwtTokenCheck,v1Login) //小程序

module.exports = router