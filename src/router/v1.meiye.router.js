const Router = require("koa-router");

const router = new Router({ prefix: '/v1/meiye' })

const { v1GetListByName, v1GetList} = require('../controller/v1.meiye.controller.js')

router.get('/search', v1GetListByName)
router.get('/list', v1GetList)






module.exports = router