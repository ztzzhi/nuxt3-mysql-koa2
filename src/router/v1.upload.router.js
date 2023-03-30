const Router = require('koa-router')

const { upload ,getcalc} = require('../controller/v1.upload.controller')

const router = new Router({ prefix: '/upload' })

router.post('/', upload)

router.get('/getcalc', getcalc)


module.exports = router