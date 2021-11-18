const bcrypt = require("bcryptjs");

const { SALT, JWTSECRET } = require("../config/config.default");

const { getUserInfo } = require("../service/user.service");

const jwt = require('jsonwebtoken')

const jwtTokenCheck = async (ctx, next) => {
  try {
    const { authorization } = ctx.request.header
    const token = (authorization ? authorization : '').replace('Bearer ', '')
    const user = jwt.verify(token, JWTSECRET)
    ctx.state.user = user
  } catch (error) {
    console.log(error);
    switch (error.name) {
      case 'TokenExpiredError':
        return ctx.app.emit('error', {
          code: 500,
          msg: "用户登录已过期",
          result: ''
        }, ctx)
      case 'JsonWebTokenError':
        return ctx.app.emit('error', {
          code: 500,
          msg: "无效的token",
          result: ''
        }, ctx)
      default:
        return ctx.app.emit('error', {
          code: 500,
          msg: "无效的token",
          result: ''
        }, ctx)
    }
  }
  await next()
};

const bcryptPassword = async (ctx, next) => {
  const { password } = JSON.parse(ctx.request.body);

  const salt = bcrypt.genSaltSync(SALT);

  // hash保存的是密文
  const hash = bcrypt.hashSync(password, salt);

  console.log(typeof ctx.request.body);

  ctx.request.body = JSON.stringify({ ...JSON.parse(ctx.request.body), password: hash });

  await next();
};

const vertifyPassword = async (ctx, next) => {
  const { user_name, password } = (ctx.request.query);
  try {
    const res = await getUserInfo({ user_name });
    console.log(res.user_name, 'res');
    ctx.state.user = res
    if (!res.user_name) {
      ctx.app.emit(
        "error",
        {
          code: 400,
          msg: "用户登录失败,请检查用户名和密码",
          result: "",
        },
        ctx
      );
      return;
    }
    if (!bcrypt.compareSync(password, res.password)) {
      ctx.app.emit(
        "error",
        {
          code: 400,
          msg: "用户登录失败,请检查用户名和密码",
          result: "",
        },
        ctx
      );
      return;
    }
  } catch (error) {
    ctx.app.emit("error", {
      code: 500,
      msg: "登录异常",
      result: "",
    });
  }
  await next();
};

module.exports = {
  bcryptPassword,
  vertifyPassword,
  jwtTokenCheck
};
