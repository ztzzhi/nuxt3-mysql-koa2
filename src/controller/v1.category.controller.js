const { selectCategory} = require("../service/v1.category.service");
class V1CategoryController {
    async v1SearchCategory (ctx, next) {
        try {
            const res = await selectCategory();
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

module.exports = new V1CategoryController()