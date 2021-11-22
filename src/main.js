const { APP_PORT } = require('./config/config.default')

const fs = require('fs')

const https = require('https')

const path = require('path')

const options = {
    key: fs.readFileSync(path.resolve(__dirname,'./ssl/myutils.cn.key')),
    cert: fs.readFileSync(path.resolve(__dirname,'./ssl/myutils.cn.pem'))
}

const app = require('./app/index')

https.createServer(options,app.callback()).listen(APP_PORT,()=>{
    console.log(`service is running at https://localhost:${APP_PORT}`)
})
