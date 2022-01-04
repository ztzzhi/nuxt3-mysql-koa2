const Router = require("koa-router");

const router = new Router({ prefix: '/v1/news' })

const { v1GetNewsList, v1GetNewsListTypeALL } = require('../controller/v1.news.controller.js')
const { v1GetNewsListType } = require('../middleware/v1.news.middleware.js')

router.get('/newslist', v1GetNewsListType, v1GetNewsList) //获取新闻列表
router.get('/newstype', v1GetNewsListTypeALL) //获取新闻列表类型

module.exports = router