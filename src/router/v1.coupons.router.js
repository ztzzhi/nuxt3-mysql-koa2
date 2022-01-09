const Router = require("koa-router");

const router = new Router({ prefix: '/v1/coupons' })

const { v1GetCoupons, v1GetBannerList, v1GetGoodsToken, v1GetGoodsDetail, v1GetClipBoard, v1GetJiuKuaiJiu, v1GetRecommend ,v1GetHalfPrice} = require('../controller/v1.coupons.controller.js')

router.get('/info', v1GetCoupons) //获取优惠券

router.get('/banner', v1GetBannerList) //获取banner

router.get('/token', v1GetGoodsToken) //获取口令

router.get('/detail', v1GetGoodsDetail) //获取详细信息

router.get('/clipboard', v1GetClipBoard) //获取剪切板详情

router.get('/jiukuaijiu', v1GetJiuKuaiJiu) //获取九块九

router.get('/recommend', v1GetRecommend) //获取好物推荐

router.get('/halfprice', v1GetHalfPrice) //获取好物推荐




module.exports = router