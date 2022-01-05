const Router = require("koa-router");

const router = new Router({ prefix: '/v1/fighting' })

const { v1GetFightingList } = require('../controller/v1.fighting.controller.js')

router.get('/list',v1GetFightingList)

module.exports = router