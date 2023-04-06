const V1article = require('../model/v1.article.model')
const { Op } = require("sequelize");
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
                order: [["isTop", 'DESC']],
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

    async selectArticleByKeys (keyword) {
        try {
            const res = await V1article.findAll({
                where: {
                    [Op.or]: [
                        {
                            title: {
                                [Op.like]: `%${keyword}%`
                            }
                        },
                        {
                            desc: {
                                [Op.like]: `%${keyword}%`
                            }
                        }
                    ]
                },
            })
            return res
        } catch (error) {
            console.log(error);
        }
    }

    async selectArticleStatistics () {
        try {
            const articleNum = await V1article.count()
            const praiseNum = await V1article.sum('praiseNum')
            const viewNum = await V1article.sum('viewNum')
            return {
                articleNum,
                praiseNum,
                viewNum
            }
        } catch (error) {
            console.log(error);
        }
    }

    async changeArticlev1Praise (id, isReduce) {
        try {
            const item = await V1article.findOne({
                where: {
                    id
                }
            })

            let praiseNum = 0
            if (!isReduce) {
                praiseNum = (item.praiseNum || 0) + 1
            } else {
                praiseNum = (item.praiseNum || 0) - 1
            }

            await V1article.update({ praiseNum: praiseNum }, {
                where: { id }
            })
            return ''

        } catch (error) {
            console.log(error);
        }
    }

    async changeArticlev1View (id, isReduce) {
        try {
            const item = await V1article.findOne({
                where: {
                    id
                }
            })

            let viewNum = item.viewNum + 1

            await V1article.update({ viewNum: viewNum }, {
                where: { id }
            })
            return ''

        } catch (error) {
            console.log(error);
        }
    }

    async getArticlePraiseNumById (id) {
        try {
            const item = await V1article.findOne({
                where: {
                    id
                }
            })
            return item.praiseNum

        } catch (error) {
            console.log(error);
        }
    }


}

module.exports = new V1ArticleService()