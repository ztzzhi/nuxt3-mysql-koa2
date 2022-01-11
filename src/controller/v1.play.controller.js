
const axios = require('axios')
const { APIKEY } = require('../config/config.default')
class V1NewsController {
    async v1GetPlayMindList (ctx, next) {
        let {num=1} = ctx.query
        let { data } = await axios.get('http://api.tianapi.com/naowan/index?num='+num+'&key='+APIKEY)
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
    async v1GetPlayStandList (ctx, next) {
        let {num=1} = ctx.query
        let { data } = await axios.get('http://api.tianapi.com/wenda/index?num='+num+'&key='+APIKEY)
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

module.exports = new V1NewsController()