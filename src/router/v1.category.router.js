const Router = require("koa-router");

const router = new Router({ prefix: '/v1/category' })

const { v1SearchCategory } = require('../controller/v1.category.controller.js')

router.get('/', v1SearchCategory)

module.exports = router