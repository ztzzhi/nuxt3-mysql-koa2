const V1Category = require('../model/v1.category.model')
class V1CategoryService {
    async selectCategory () {
        try {
            const res = await V1Category.findAll({
                where: {

                },
            })
            return res
        } catch (error) {
            console.log(error);
        }
    }


}

module.exports = new V1CategoryService()