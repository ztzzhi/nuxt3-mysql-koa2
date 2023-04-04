// const { APP_PORT } = require('./config/config.default')

// const fs = require('fs')

// const https = require('https')

// const path = require('path')

// // const Ws = require('./app/ws')

// const options = {
//     key: fs.readFileSync(path.resolve(__dirname, './ssl/myutils.cn.key')),
//     cert: fs.readFileSync(path.resolve(__dirname, './ssl/myutils.cn.pem'))
// }

// const app = require('./app/index')

// const server = https.createServer(options, app.callback())

// // let ws = new Ws()
// // ws.init(server)

// server.listen(APP_PORT, () => {
//     console.log(`service is running at https://localhost:${APP_PORT}`)
// })

const { APP_PORT } = require('./config/config.default')
const app = require('./app/index')

app.listen(APP_PORT, () => {
    console.log(`service is running at http://localhost:${APP_PORT}`)
})