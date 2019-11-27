const productModel = require('../schemas/product-schemas');

class productListService {
    async findProductList( email, password ){
        const res = productModel.find({ email: email, password: password }, {projection:{_id:1, email:1, password:1, product:1}});
        return res
    }
}

module.exports = productListService;