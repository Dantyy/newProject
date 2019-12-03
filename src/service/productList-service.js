const productModel = require('../schemas/product-schemas');

class productListService {
    async findProductList( email, password ){
        const res = productModel.find({ email: email, password: password }, "_id product");
        return res
    }
}

module.exports = productListService;