const Koa = require('koa')

const errorHandle = require('../config/error.config')

const KoaBody = require('koa-body')

const router = require('../router')

const app = new Koa()


app.use(KoaBody({
    multipart: true, 
}))



app.use(router.routes())
app.use(router.allowedMethods())


app.on('error', errorHandle)

module.exports = app