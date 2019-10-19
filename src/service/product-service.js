const productModel = require('../schemas/product-schemas');

class productService {
    async createProduct ( body ) {
        const res = await productModel.create( body );
        return res;
    }

    async findProduct ( retailername, productname ) {
        const res = await productModel.findOne({ retailername, productname }, );
        return res;
    }

    async updateProduct ( retailername, productname, body ) {
        const res = await productModel.findOneAndUpdate({ retailername, productname }, body );
        return res;
    }

    async deleteProduct ( productname ) {
        const res = await productModel.findOneAndDelete({ productname }, );
        return res;
    }
}

module.exports = productService;