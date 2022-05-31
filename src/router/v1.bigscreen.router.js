const Router = require("koa-router");

const router = new Router({ prefix: '/v1/bigscreen' })

const { v1GetAllData ,v1GetPolicyData,v1GetArticleData} = require('../controller/v1.bigscreen.controller.js')

router.get('/list',v1GetAllData)
router.get('/policy',v1GetPolicyData)
router.get('/article',v1GetArticleData)

module.exports = router