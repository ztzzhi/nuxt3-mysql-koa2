const V1NewsType = require('../model/v1.newstype.model')

class V1UserService {
    async serviceGetTypeCodeUrl(type,page){
        try {
            const opt = {}
            type && Object.assign(opt,{code:type})
            const result = await V1NewsType.findOne({
                where:opt
            })
            return result ? result.dataValues : null;
        } catch (error) {
            console.log(error);
        }
    }
    async getAllNewsType(){
        try {
            const result = await V1NewsType.findAll()
            return result ? result : null;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new V1UserService()