
const axios = require('axios')
const qs = require("qs")
class V1MeiYeController {
    async v1GetListByName (ctx, next) {
        const { search } = ctx.query
        let data = qs.stringify({ search: search ? search : "" })
        let res = await axios.post('https://api.meiye.art/web/imagetagsearch', data)
        console.log(res, 'res');
        if (res?.data?.code === 10000) {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: res?.data?.data.topnav
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

    async v1GetList (ctx, next) {
        const { page } = ctx.query
        let data = qs.stringify({ page: page ? page : 1 })
        let res = await axios.post('https://api.meiye.art/web/canvaslists', data)
        console.log(res, 'res');
        if (res?.data?.code === 10000) {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: res?.data?.data?.lists
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

module.exports = new V1MeiYeController()