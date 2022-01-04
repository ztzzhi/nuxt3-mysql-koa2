
const axios = require('axios')
const { APIKEY } = require('../config/config.default')
const { getAllNewsType } = require('../service/v1.news.service')
class V1UserController {
    async v1GetNewsList (ctx, next) {
        let {page=1,num=10} = ctx.query
        let url = ctx.state.newsUrl + '?key=' + APIKEY + '&page=' + page + '&num=' + num 
        let { data } = await axios.get(url)
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
    async v1GetNewsListTypeALL (ctx, next) {
        let result = await getAllNewsType()
        console.log(result,'result');
        return ctx.body = {
            code:200,
            msg:'查询成功',
            result:result
        }
    }
}

module.exports = new V1UserController()