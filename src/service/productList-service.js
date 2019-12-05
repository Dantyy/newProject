const productModel = require('../schemas/product-schemas');

class productListService {
    async findProductList( email, password ){
        const res = productModel.find({ email: email, password: password }, "_id product");
        if ( res.length === 0 ) {
            throw new Error('Fail to get product list.')
        }
        else {
            return res;
        }
    }
}

module.exports = productListService;