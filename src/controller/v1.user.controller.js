

// const {UserCreate} = require('../service/v1.user.service.js')
const jwt = require('jsonwebtoken');

const { JWTSECRET } = require("../config/config.default");
class V1UserController {
    async v1Login(ctx,next){
        ctx.body = {
            ...ctx.state.v1user,
            token:jwt.sign(ctx.state.v1user, JWTSECRET, { expiresIn: '1d' }),
        }
    }
}

module.exports = new V1UserController()