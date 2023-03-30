const WebSocket = require('ws')
const qs = require('qs')
const messageList = [
  {
    id: 1,
    msg: "你好啊小卡冷静下来就想啊想啊睡了多久啊索朗多吉啦设计达拉斯就到啦世界的理解啦啦啦啊但是",
    to: "MDQ6VXNlcjE=",
    from: "MDQ6VXNlcjI=",
    updateTime: "15:23"
  },
  {
    id: 2,
    msg: "我很好",
    to: "MDQ6VXNlcjI=",
    from: "MDQ6VXNlcjE=",
    updateTime: "15:28"
  },
  {
    id: 3,
    msg: "你在干什么啊",
    to: "MDQ6VXNlcjE=",
    from: "MDQ6VXNlcjI=",
    updateTime: "15:31"
  },
  {
    id: 4,
    msg: "我没有干什么",
    to: "MDQ6VXNlcjI=",
    from: "MDQ6VXNlcjE=",
    updateTime: "15:40"
  },
  {
    id: 5,
    msg: "你好啊小卡冷静下来就想啊想啊睡了多久啊索朗多吉啦设计达拉斯就到啦世界的理解啦啦啦啊但是",
    to: "MDQ6VXNlcjE=",
    from: "MDQ6VXNlcjI=",
    updateTime: "15:50"
  },
  {
    id: 6,
    msg: "我很好",
    to: "MDQ6VXNlcjI=",
    from: "MDQ6VXNlcjE=",
    updateTime: "15:52"
  },
  {
    id: 7,
    msg: "你在干什么啊",
    to: "MDQ6VXNlcjE=",
    from: "MDQ6VXNlcjI=",
    updateTime: "15:54"
  },
  {
    id: 8,
    msg: "我没有干什么",
    to: "MDQ6VXNlcjI=",
    from: "MDQ6VXNlcjE=",
    updateTime: "15:59"
  }
]

class ws {
  constructor(){
    this.online = 0
    this.ws = null
  }
  // static online = 0 // 在线连接
  // static ws = WebSocket.Server //默认实例
  init (server) {
    // 创建实例
    this.ws = new WebSocket.Server({port: 9000 });
    this.ws.on('connection', async (ws, request) => {
      ws.on('message', async (msg) => {
        console.log('客户端发送数据给服务端了: ' + msg)
        const newMsg = JSON.parse(msg)
        messageList.push(newMsg)
        let sendObj = { "message": "连接成功", "retCode": 200, messageList }
        ws.send(JSON.stringify(sendObj))
        this.ws.clients.forEach((client) => {
          client.send(JSON.stringify(sendObj));
        })
      })
      if (!(request.url.includes('?id='))) {
        return ws.close();
      }
      this.online = this.ws._server._connections;
      console.log(`socket当前在线${this.online}个连接`)
      const {
        id
      } = qs.parse(qs.parse(request.url.slice(2)));
      if (!id) {
        return ws.close();
      }
      try {
        //do something
        ws.id = id // 添加ws实例的唯一标识
        const obj = {
          "message": "连接成功", "retCode": 200, messageList
        }
        ws.send(JSON.stringify(obj))
      } catch (error) {
        console.log('websocket connection error', error)
        return ws.close();
      }
    });
  }
  // 发送客户端数据
  sendToCliect (Data) {
    let iskeep = false // 加个变量做下发成功判断
    if (!(this.ws instanceof WebSocket.Server)) {
      return iskeep;
    }
    const { id } = Data
    this.ws.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN && client.id === id) {
        // 发送给指定匹配id
        client.send(JSON.stringify(Data));
        iskeep = true
      }
    });
    return iskeep;
  }
}


module.exports = ws