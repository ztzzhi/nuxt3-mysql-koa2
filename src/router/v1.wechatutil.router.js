const Router = require("koa-router");

const router = new Router({ prefix: '/v1/wechatutil' })

const { v1GetWechatutilList } = require('../controller/v1.wechatutil.controller.js')

router.get('/list',v1GetWechatutilList)

module.exports = router