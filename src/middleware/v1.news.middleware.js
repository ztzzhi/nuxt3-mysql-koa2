const { serviceGetTypeCodeUrl } = require('../service/v1.news.service')

/*
  每日简报 topnews
  CBA cba
  NBA nba
  综合新闻 totalnews
  健康知识 healthy
  IT资讯 it
  娱乐新闻 entertainment
  军事资讯 military
  电竞 esports
  女性 woman
  影视 movies
  汽车 car
*/ 

const v1GetNewsListType = async (ctx, next) => {
  const {type} = ctx.query
  const res = await serviceGetTypeCodeUrl(type)
  if(res){
    ctx.state.newsUrl = res.codeurl
    await next()
    return
  }
  return ctx.app.emit(
    "error",
    {
      code: 500,
      msg: "类型不存在",
      result: "",
    },
    ctx
  );
}

module.exports = {
  v1GetNewsListType,
}