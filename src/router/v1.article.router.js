const Router = require("koa-router");

const router = new Router({ prefix: '/v1/article' })

const { v1AddArticle } = require('../controller/v1.article.controller.js')

router.post('/add', v1AddArticle)

module.exports = router