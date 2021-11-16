// 错误集中处 理
module.exports = (err,ctx)=>{
  let status = 400
  switch (err.code) {
    case 400:
      status = 400
      break;
    case 500:
      status = 500
      break;
    default:
      status = 400
  }
  ctx.status = status
  ctx.body = err
}