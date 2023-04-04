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

    async createArticle (title, content, img, tag, isTop, desc) {
        try {
            const res = await V1article.create({
                title, content, img, tag, isTop, desc
            })
            return res
        } catch (error) {
            console.log(error);
        }
    }

    async selectArticle (page, page_size) {
        try {
            const res = await V1article.findAndCountAll({
                where: {

                },
                offset: (page * 1 - 1) * page_size,
                limit: page_size * 1
            })
            return res
        } catch (error) {
            console.log(error);
        }
    }

    async selectArticleById (id) {
        try {
            const res = await V1article.findOne({
                where: {
                    id: id
                },
            })
            return res
        } catch (error) {
            console.log(error);
        }
    }


}

module.exports = new V1ArticleService()