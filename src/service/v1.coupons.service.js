const V1HotGoods = require('../model/v1.hotgoods.model')

class V1UserService {
    async getAllGoodsType(){
        try {
            const result = await V1HotGoods.findAll()
            return result ? result : null;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new V1UserService()