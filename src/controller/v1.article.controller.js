const { createArticle, selectArticle, selectArticleById, selectArticleByKeys, selectArticleStatistics, changeArticlev1Praise, changeArticlev1View ,getArticlePraiseNumById} = require("../service/v1.article.service");
class V1ArticleController {
    async v1AddArticle (ctx, next) {
        const { title, content, img, tag, isTop, desc } = (ctx.request.body);
        if (!title || !content || !img || !tag || !desc) {
            console.error("参数校验错误");
            ctx.status = 400;
            ctx.app.emit(
                "error",
                {
                    code: 400,
                    msg: "参数校验错误",
                    result: "",
                },
                ctx
            );
            return;
        }
        try {
            const res = await createArticle(title, content, img, tag, isTop, desc);
            console.log(res, "res");
            ctx.body = {
                code: 200,
                msg: "操作成功",
                result: {},
            };
        } catch (error) {
            ctx.body = {
                code: 500,
                msg: "服务器错误",
                result: "",
            };
        }
    }

    async v1SelectArticle (ctx, next) {
        const { page, page_size } = (ctx.request.query);
        if (!page && !page_size) {
            console.error("参数校验错误");
            ctx.status = 500;
            ctx.app.emit(
                "error",
                {
                    code: 500,
                    msg: "参数校验错误",
                    result: "",
                },
                ctx
            );
            return;
        }
        try {
            const res = await selectArticle(page, page_size);
            console.log(res, "res");
            ctx.body = {
                code: 200,
                msg: "操作成功",
                result: {
                    lists: res.rows,
                    total: Math.ceil(res.count / page_size)
                },
            };
        } catch (error) {
            ctx.body = {
                code: 500,
                msg: "服务器错误",
                result: "",
            };
        }
    }
    async v1FindOneArticle (ctx, next) {
        const { id } = (ctx.request.query);
        if (!id) {
            console.error("参数校验错误");
            ctx.status = 500;
            ctx.app.emit(
                "error",
                {
                    code: 500,
                    msg: "参数校验错误",
                    result: "",
                },
                ctx
            );
            return;
        }
        try {
            const res = await selectArticleById(id);
            console.log(res, "res");
            ctx.body = {
                code: 200,
                msg: "操作成功",
                result: {
                    ...res.dataValues,
                },
            };
        } catch (error) {
            ctx.body = {
                code: 500,
                msg: "服务器错误",
                result: "",
            };
        }
    }

    async v1SearchArticle (ctx, next) {
        const { keyword } = (ctx.request.query);
        if (!keyword) {
            console.error("参数校验错误");
            ctx.status = 500;
            ctx.app.emit(
                "error",
                {
                    code: 500,
                    msg: "参数校验错误",
                    result: "",
                },
                ctx
            );
            return;
        }
        try {
            const res = await selectArticleByKeys(keyword);
            console.log(res, "res");
            ctx.body = {
                code: 200,
                msg: "操作成功",
                result: res
            };
        } catch (error) {
            ctx.body = {
                code: 500,
                msg: "服务器错误",
                result: "",
            };
        }
    }
    async v1ArticleStatistics (ctx, next) {
        try {
            const res = await selectArticleStatistics();
            console.log(res, "res");
            ctx.body = {
                code: 200,
                msg: "操作成功",
                result: res
            };
        } catch (error) {
            ctx.body = {
                code: 500,
                msg: "服务器错误",
                result: "",
            };
        }
    }
    async v1ArticlePraise (ctx, next) {
        const { id, isReduce } = (ctx.request.body);
        if (!id) {
            console.error("参数校验错误");
            ctx.status = 400;
            ctx.app.emit(
                "error",
                {
                    code: 400,
                    msg: "参数校验错误",
                    result: "",
                },
                ctx
            );
            return;
        }
        try {
            const res = await changeArticlev1Praise(id, isReduce);
            console.log(res, "res");
            ctx.body = {
                code: 200,
                msg: "操作成功",
                result: res
            };
        } catch (error) {
            ctx.body = {
                code: 500,
                msg: "服务器错误",
                result: "",
            };
        }
    }
    async v1ArticleView (ctx, next) {
        const { id } = (ctx.request.body);
        if (!id) {
            console.error("参数校验错误");
            ctx.status = 400;
            ctx.app.emit(
                "error",
                {
                    code: 400,
                    msg: "参数校验错误",
                    result: "",
                },
                ctx
            );
            return;
        }
        try {
            const res = await changeArticlev1View(id);
            console.log(res, "res");
            ctx.body = {
                code: 200,
                msg: "操作成功",
                result: res
            };
        } catch (error) {
            ctx.body = {
                code: 500,
                msg: "服务器错误",
                result: "",
            };
        }
    }
    async v1ArticlePraiseNum (ctx, next) {
        const { id } = (ctx.request.query);
        if (!id) {
            console.error("参数校验错误");
            ctx.status = 400;
            ctx.app.emit(
                "error",
                {
                    code: 400,
                    msg: "参数校验错误",
                    result: "",
                },
                ctx
            );
            return;
        }
        try {
            const res = await getArticlePraiseNumById(id);
            console.log(res, "res");
            ctx.body = {
                code: 200,
                msg: "操作成功",
                result: res
            };
        } catch (error) {
            ctx.body = {
                code: 500,
                msg: "服务器错误",
                result: "",
            };
        }
    }
}

module.exports = new V1ArticleController()