const ProductService = require('../service/product-service');
const productService = new ProductService();

class productControllers {

    async createProduct (ctx) {
        const email = ctx.request.body.email;
        const password = ctx.request.body.password;
        const retailername = ctx.request.body.product.retailername;
        const productname = ctx.request.body.product.productname;
        const price = ctx.request.body.product.price;
        const number = ctx.request.body.product.number;
        const total = ctx.request.body.product.total;
        const product = {retailername, productname, price, number, total}
        const res = await productService.createProduct( email, password, product );
        ctx.body = {
            status: "success",
            operation: "create product",
            res
        }
    }

    async findProduct (ctx) {
        const email = ctx.request.body.email;
        const retailername = ctx.request.body.product.retailername;
        const productname = ctx.request.body.product.productname;
        const res = await productService.findProduct( email, retailername, productname );
        ctx.body = {
            status: "success",
            operation: "find product",
            res
        }
    }

    async updateProduct (ctx) {
        const productId = ctx.request.body.productId;
        const retailername = ctx.request.body.product.retailername;
        const productname = ctx.request.body.product.productname;
        const price = ctx.request.body.product.price;
        const number = ctx.request.body.product.number;
        const total = ctx.request.body.product.total;
        const product = {retailername, productname, price, number, total}
        const res = await productService.updateProduct( productId, product );
        ctx.body = {
            status: "success",
            operation: "update product",
            res
        } 
    }

    async deleteProduct (ctx) {
        const productId = ctx.request.body.productId;
        const res = await productService.deleteProduct( productId );
        ctx.body = {
            status: "success",
            operation: "delete product",
            res
        }
    }
}

module.exports = productControllers;