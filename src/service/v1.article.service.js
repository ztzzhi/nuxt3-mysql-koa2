const V1article = require('../model/v1.article.model')

class V1ArticleService {
    async articleFindOne (openid) {
        try {
            const opt = {}
            openid && Object.assign(opt, { openid })
            const res = await V1article.findOne({
                where: opt
            })
            return res
        } catch (error) {
            console.log(error);
        }
    }

    async createArticle (title, content, img, tag, isTop) {
        try {
            const res = await V1article.create({
                title, content, img, tag, isTop
            })
            return res
        } catch (error) {
            console.log(error);
        }
    }


}

module.exports = new V1ArticleService()