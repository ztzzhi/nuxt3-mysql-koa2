const V1User = require('../model/v1.article.model')

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

    async UserCreate(openid,user_name){
        try {
            const res = await V1User.create({
                openid,
                user_name
            })
            return res
        } catch (error) {
            console.log(error);
        }
    }

    
}

module.exports = new V1UserService()