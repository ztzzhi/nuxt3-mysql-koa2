const Router = require("koa-router");

const router = new Router({ prefix: '/v1/play' })

const { v1GetPlayMindList ,v1GetPlayStandList} = require('../controller/v1.play.controller.js')

router.get('/mind', v1GetPlayMindList) //获取新闻列表
router.get('/stand', v1GetPlayStandList) //获取新闻列表类型

module.exports = router