const Router = require('koa-router')

const { upload } = require('../controller/v1.upload.controller')

const router = new Router({ prefix: '/upload' })

router.post('/', upload)

module.exports = router