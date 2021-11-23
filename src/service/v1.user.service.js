const V1User = require('../model/v1.user.model')

class V1UserService {
    async getUserInfoByOpenid(openid){
        try {
        const opt = {}
        openid && Object.assign(opt,{openid})
        const res = await V1User.findOne({
            where:opt
        })
        return res
        } catch (error) {
            console.log(error);
        }
    }

    async UserCreate(openid){
        try {
            const res = await V1User.create({
                openid
            })
            return res
        } catch (error) {
            console.log(error);
        }
    }

    
}

module.exports = new V1UserService()