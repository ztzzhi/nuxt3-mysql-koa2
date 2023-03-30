
const axios = require('axios')
class V1BigScreenController {
    async v1GetAllData (ctx, next) {
        let { data } = await axios.get("https://c.m.163.com/ug/api/wuhan/app/data/list-total?t" +
            new Date().getTime())
        if (data.code == 10000) {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: data.data
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
    async v1GetPolicyData (ctx, next) {
        let id = ctx.query.id
        let { data } = await axios.get("https://c.m.163.com/ug/api/wuhan/app/manage/track-map?cityId=" + id)
        console.log(data);
        if (data.code == 10000) {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: data
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
    async v1GetArticleData (ctx, next) {
        let { data } = await axios.get("https://c.m.163.com/ug/api/wuhan/app/article/search-list")
        if (data.code == 10000) {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: data.data
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
    async v1GetAddress (ctx, next) {
        try {
            let res = await axios.get("https://restapi.amap.com/v3/geocode/geo?key=2909a1096911a9dd21daa913c86bb677&address=hangzhou")
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: res.data.geocodes
            }
        } catch (error) {
            ctx.body = {
                code: 500,
                msg: '查询失败',
                result: error
            }
        }
    }
}

module.exports = new V1BigScreenController()