const productModel = require('../schemas/product-schemas');
const mongoose = require('mongoose');

class productService {

    async createProduct ( email, password, product ) {
        const res = await productModel.create({ email: email, password: password, product: product });
        if (res.length === 0){
            throw new Error('Cannot create the product, because failed to log in your account ')
        }
        return res;
    }

    async findProduct ( email, retailername, productname ) {
        const res = await productModel.find({ email: email, retailername: retailername, productname: productname });
        if (res.length === 0){
            throw new Error('Cannot find your product.')
        }
        return res;
    }

    async updateProduct ( productId, product ) {
        const res = await productModel.updateOne({ _id: mongoose.Types.ObjectId(productId) }, {$set: {product}} );
        if (res.length === 0){
            throw new Error('Cannot find your product, failed to update')
        }
        return res;
    }

    async deleteProduct ( productId ) {
        const res = await productModel.deleteOne({ _id: mongoose.Types.ObjectId(productId) })
        if( res.length ===0 ){
            throw new Error('cannot find the product id.')      //seems not work.
        }
        console.log(res);
        return res;
    }
}

module.exports = productService;