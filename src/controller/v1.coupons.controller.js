
const TKAPP = require('../utils/tk')
const { getAllGoodsType } = require('../service/v1.coupons.service')
class V1CouponsController {
    async v1GetCoupons (ctx, next) {
        const { content } = ctx.query
        let res = await TKAPP.request('https://openapi.dataoke.com/api/dels/taobao/kit/coupon/get-coupon-info', {
            method: 'GET',
            form: { content: (content), version: "v1.1.0" }
        })
        console.log(res);
        if (res.code == 0) {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: res.data
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

    async v1GetBannerList (ctx, next) {
        let res = await TKAPP.request('https://openapi.dataoke.com/api/goods/topic/carouse-list', {
            method: 'GET',
            form: { version: "v2.0.0" }
        })
        if (res.code == 0) {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: res.data
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

    async v1GetGoodsToken (ctx, next) {
        const {goodsId} = ctx.query
        console.log(goodsId);
        let res = await TKAPP.request('https://openapi.dataoke.com/api/tb-service/get-privilege-link', {
            method: 'GET',
            form: { version: "v1.3.1" ,goodsId}
        })
        if (res.code == 0) {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: res.data
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

    async v1GetGoodsDetail (ctx, next) {
        const {goodsId} = ctx.query
        console.log(goodsId);
        let res = await TKAPP.request('https://openapi.dataoke.com/api/goods/get-goods-details', {
            method: 'GET',
            form: { version: "v1.2.3" ,goodsId}
        })
        if (res.code == 0) {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: res.data
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

    async v1GetClipBoard (ctx, next) {
        const {content} = ctx.query
        let res = await TKAPP.request('https://openapi.dataoke.com/api/dels/kit/contentParse', {
            method: 'GET',
            form: { version: "v1.0.0" ,content}
        })
        if (res.code == 0) {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: res.data
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

    async v1GetJiuKuaiJiu (ctx, next) {
        const {page=1,limit=15,section=2} = ctx.query
        let res = await TKAPP.request('https://openapi.dataoke.com/api/goods/nine/op-goods-list', {
            method: 'GET',
            form: { version: "v2.0.0" ,pageId:page,pageSize:limit,nineCid:section}
        })
        if (res.code == 0) {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: res.data
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

    async v1GetRecommend (ctx, next) {
        const {page=1,limit=15,section=2,cids=''} = ctx.query
        let res = await TKAPP.request('https://openapi.dataoke.com/api/goods/explosive-goods-list', {
            method: 'GET',
            form: { version: "v1.0.0" ,pageId:page,pageSize:limit,PriceCid:section,cids:cids}
        })
        if (res.code == 0) {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: res.data
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
    async v1GetHalfPrice (ctx, next) {
        let res = await TKAPP.request('https://openapi.dataoke.com/api/goods/get-half-price-day', {
            method: 'GET',
            form: { version: "v1.0.0" }
        })
        if (res.code == 0) {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: res.data
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
    async v1GetHotGoodsList (ctx, next) {
        const {page=1,limit=15,section=2,cids=''} = ctx.query
        let res = await TKAPP.request('https://openapi.dataoke.com/api/goods/explosive-goods-list', {
            method: 'GET',
            form: { version: "v1.0.0" ,pageId:page,pageSize:limit,PriceCid:section,cids:cids}
        })
        if (res.code == 0) {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: res.data
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
    async v1GetSearchGoods (ctx, next) {
        const {page=1,limit=15,keywords=''} = ctx.query
        let res = await TKAPP.request('https://openapi.dataoke.com/api/goods/list-super-goods', {
            method: 'GET',
            form: { version: "v1.3.0",pageId:page,pageSize:limit,type:0,keyWords:keywords}
        })
        if (res.code == 0) {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                result: res.data
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
    async v1GetCollection (ctx, next) {
        let res = await getAllGoodsType()
        return ctx.body = {
            code: 200,
            msg: '查询成功',
            result: res
        }
    }
}

module.exports = new V1CouponsController()