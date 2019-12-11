const productModel = require('../schemas/product-schemas');
const mongoose = require('mongoose');

class productService {

    async createProduct ( user_id, product_id, product ) {
        const res = await productModel.create({ user_id: user_id, product_id: product_id, product: product });
        console.log("res"+res);
        if (res.length === 0){
            throw new Error('Cannot create the product, because failed to log in your account ')
        }
        else {
            return res;
        }
    }

    async findProduct ( email, retailername, productname ) {
        const res = await productModel.find({ email: email, retailername: retailername, productname: productname });
        if (res.length === 0){
            throw new Error('Cannot find your product.')
        }
        else {
            return res;
        }
    }

    async updateProduct ( productId, product ) {
        const res = await productModel.update({ _id: mongoose.Types.ObjectId(productId) }, {$set: {product}} );
        if (res.length === 0){
            throw new Error('Cannot find your product, failed to update')
        }
        else {
            return res;
        }
    }

    async deleteProduct ( productId ) {
        const res = await productModel.delete({ _id: mongoose.Types.ObjectId(productId) })
        if( res.length ===0 ){
            throw new Error('cannot find the product id.')
        }
        else {
            return res;
        }
    }
}

module.exports = productService;