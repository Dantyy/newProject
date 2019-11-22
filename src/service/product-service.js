const productModel = require('../schemas/product-schemas');
const userModel = require('../schemas/user-schemas');

class productService {

    async createProduct ( email, password, product ) {
        const res = await userModel.update({email: email, password: password}, {$set:{product}});
        if (res.length === 0){
            throw new Error('Cannot create the product, because failed to log in your account ')
        }
        return res;
    }

    async findProduct ( retailername, productname ) {
        const res = await productModel.find({ retailername:retailername, productname:productname });
        if (res.length === 0){
            throw new Error('Cannot find your product.')
        }
        return res;
    }

    async updateProduct ( id, product ) {
        const res = await productModel.update({ _id: mongoose.Types.ObjectId(id) }, {$set: {product}} );
        if (res.length === 0){
            throw new Error('Cannot find your product, failed to update')
        }
        return res;
    }

    async deleteProduct ( id ) {
        const res = await productModel.delete({ _id: mongoose.Types.ObjectId(id) });
        if(res.length === 0){
            throw new Error('Failed to delete')
        }
        return res;
    }
}

module.exports = productService;