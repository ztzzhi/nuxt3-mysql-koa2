const Router = require("koa-router");

const router = new Router({ prefix: '/v1/acrostic' })

const { v1GetAcrosticList } = require('../controller/v1.acrostic.controller.js')

router.get('/list',v1GetAcrosticList) //

module.exports = router