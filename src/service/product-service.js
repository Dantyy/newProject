const productModel = require('../schemas/product-schemas');

class productService {
    async createAProduct ( body ) {
        const res = await productModel.create(body);
        return res;
    }

    async findAProduct ( retailername, productname ) {
        const res = await productModel.findOne({ retailername, productname }, );
        return res;
    }

    async updateAProduct ( retailername, productname, body ) {
        const res = await productModel.findOneAndUpdate({ retailername, productname }, body );
        return res;
    }

    async deleteAProduct ( productname ) {
        const res = await productModel.findOneAndDelete({ productname }, );
        return res;
    }
}

module.exports = productService();