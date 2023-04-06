const { createUser, getUserInfo, updateById } = require("../service/user.service");

const jwt = require('jsonwebtoken');

const { JWTSECRET } = require("../config/config.default");
class UserController {
  // 用户注册
  async register (ctx, next) {
    const { user_name, password } = JSON.parse(ctx.request.body);
    if (!user_name || !password) {
      console.error("用户名或密码为空");
      ctx.status = 400;
      ctx.app.emit(
        "error",
        {
          code: 400,
          msg: "请输入用户名或密码",
          result: "",
        },
        ctx
      );
      return;
    }
    try {
      const res = await createUser(user_name, password);
      console.log(res, "res");
      ctx.body = {
        code: 200,
        msg: "操作成功",
        result: {
          user_name: res.user_name,
        },
      };
    } catch (error) {
      if (error.parent.errno == 1062) {
        ctx.status = 500
        ctx.body = {
          code: 500,
          msg: "用户名已存在",
          result: "",
        };
      } else {
        ctx.body = {
          code: 500,
          msg: "服务器错误",
          result: "",
        };
      }
    }
  }
  // 用户登录
  async login (ctx, next) {
    if (ctx.state.user.id) {
      ctx.body = {
        code: 200,
        msg: "用户登录成功",
        result: {
          user_name: ctx.state.user.user_name,
          token: jwt.sign(ctx.state.user, JWTSECRET, { expiresIn: '1d' }),
          user_id: ctx.state.user.id,
        }
      }
    } else {
      ctx.app.emit('error', {
        code: 500,
        msg: "用户登录失败",
        result: ''
      }, ctx)
    }
  }

  // 密码修改
  async changePwd (ctx, next) {
    try {
      const res = await updateById(JSON.parse(ctx.request.body))
      if (res[0] == 1) {
        ctx.body = {
          code: 200,
          msg: '密码信息修改成功',
          result: ''
        }
      } else {
        ctx.app.emit('error', {
          code: 500,
          msg: "用户信息修改失败",
          result: ''
        }, ctx)
      }
    } catch (error) {
      ctx.app.emit('error', {
        code: 500,
        msg: '密码信息修改失败',
        result: ''
      }, ctx)
    }
  }
}

module.exports = new UserController();
