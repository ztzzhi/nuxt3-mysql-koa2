
const axios = require('axios')
const {APIKEY} = require('../config/config.default')
class V1ExpressController {
    async v1GetExpressList (ctx, next) {
        let {order} = ctx.query
        let {data} = await axios.get('http://api.tianapi.com/kuaidi/index?key='+APIKEY+'&number='+order)
        if (data.code == 200) {
            ctx.body = {
                code:200,
                msg:'查询成功',
                result: data.newslist
            }
        } else {
            return ctx.app.emit(
                "error",
                {
                    code: 500,
                    msg: "服务器异常",
                    result: "",
                },
                ctx
            );
        }
    }
}

module.exports = new V1ExpressController()