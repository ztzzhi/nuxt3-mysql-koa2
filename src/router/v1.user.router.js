const Router = require("koa-router");

const router = new Router({ prefix: '/v1/users' })

const { v1Login } = require('../controller/v1.user.controller.js')

router.post('/login',v1Login)

module.exports = router