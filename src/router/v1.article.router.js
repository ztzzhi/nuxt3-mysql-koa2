const Router = require("koa-router");

const router = new Router({ prefix: '/v1/article' })

const { v1AddArticle, v1SelectArticle, v1FindOneArticle, v1SearchArticle, v1ArticleStatistics, v1ArticlePraise, v1ArticleView,v1ArticlePraiseNum } = require('../controller/v1.article.controller.js')

router.get('/', v1SelectArticle)
router.get('/detail', v1FindOneArticle)
router.get('/search', v1SearchArticle)
router.post('/add', v1AddArticle)
router.get('/statistics', v1ArticleStatistics)
router.post('/praise', v1ArticlePraise)
router.get('/praisenum', v1ArticlePraiseNum)
router.post('/view', v1ArticleView)

module.exports = router