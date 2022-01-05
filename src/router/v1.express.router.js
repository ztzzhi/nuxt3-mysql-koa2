const Router = require("koa-router");

const router = new Router({ prefix: '/v1/express' })

const { v1GetExpressList } = require('../controller/v1.express.controller.js')

router.get('/list',v1GetExpressList)

module.exports = router