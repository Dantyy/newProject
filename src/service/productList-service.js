const productModule = require('../schemas/product-schemas');
const mongoose = require('mongoose');

class productListService {
    async findProductList( name, password ){
        const res = productModule.find({ name: name, password: password });
        console.log(res);
        return res
    }
}

module.exports = productListService;