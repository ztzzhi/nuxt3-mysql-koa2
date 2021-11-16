const fs = require('fs')
const Router = require('koa-router')
const router = new Router

fs.readdirSync(__dirname).forEach(file=>{
    // 获取当前文件夹下的所有文件名
    if(file!='index.js'){
        let r = require('./'+file)
        router.use(r.routes())
    }
})

module.exports = router

