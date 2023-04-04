const Koa = require('koa')

const errorHandle = require('../config/error.config')

const KoaBody = require('koa-body')

const router = require('../router')

const sslify = require('koa-sslify').default

const statics = require('koa-static')

const cors = require('koa2-cors')

const path = require('path')

const app = new Koa()



// app.use(sslify()) https才开启


app.use(KoaBody({
    multipart: true,
    formidable: {
        // 上传目录
        // uploadDir: path.join(__dirname, '../static'),
        // 保留文件扩展名
        keepExtensions: true,
        maxFieldsSize: 200 * 1024 * 1024,
    }
}))


app.use(statics(
    path.join(__dirname, '../static')
))

app.use(cors())


app.use(router.routes())
app.use(router.allowedMethods())


app.on('error', errorHandle)

module.exports = app