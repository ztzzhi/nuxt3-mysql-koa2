const V1article = require('../model/v1.user.model')

class V1ArticleService {
    async articleFindOne(openid){
        try {
        const opt = {}
        openid && Object.assign(opt,{openid})
        const res = await V1article.findOne({
            where:opt
        })
        return res
        } catch (error) {
            console.log(error);
        }
    }

    async articleCreate(openid,user_name){
        try {
            const res = await V1article.create({
                openid,
                user_name
            })
            return res
        } catch (error) {
            console.log(error);
        }
    }

    
}

module.exports = new V1ArticleService()