const { createArticle } = require("../service/v1.article.service");
class V1ArticleController {
    async v1AddArticle (ctx, next) {
        const { title, content, img, tag, isTop } = (ctx.request.body);
        if (!title || !content || !img || !tag) {
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
            const res = await createArticle(title, content, img, tag, isTop);
            console.log(res, "res");
            ctx.body = {
                code: 200,
                msg: "创建成功",
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
}

module.exports = new V1ArticleController()