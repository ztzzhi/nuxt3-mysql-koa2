
const axios = require('axios')
const {APIKEY} = require('../config/config.default')
class V1AcrosticController {
    async v1GetAcrosticList (ctx, next) {
        const {word} = ctx.query
        console.log(word);
        let {data} = await axios.get('http://api.tianapi.com/cangtoushi/index?key='+APIKEY+'&word='+encodeURI(word))
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

module.exports = new V1AcrosticController()