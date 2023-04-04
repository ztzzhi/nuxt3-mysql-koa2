const Router = require("koa-router");

const router = new Router({ prefix: '/v1/article' })

const { v1AddArticle, v1SelectArticle, v1FindOneArticle,v1SearchArticle } = require('../controller/v1.article.controller.js')

router.get('/', v1SelectArticle)
router.get('/detail', v1FindOneArticle)
router.get('/search', v1SearchArticle)
router.post('/add', v1AddArticle)

module.exports = router