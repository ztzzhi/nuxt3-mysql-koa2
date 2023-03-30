const Router = require("koa-router");

const router = new Router({ prefix: '/v1/article' })

const { v1GetAllData } = require('../controller/v1.article.controller.js')

router.post('/add', v1GetAllData)

module.exports = router