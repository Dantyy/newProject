const ProductService = require('../service/product-service');
const productService = new ProductService();

class productControllers {

    async createProduct (ctx) {
        const email = ctx.request.body.email;
        const password = ctx.request.body.password;
        const product = ctx.request.body.product;
        const res = await productService.createProduct( email, password, product );
        ctx.body = {
            status: "success",
            operation: "create product",
            res
        }
    }

    async findProduct (ctx) {
        const retailername = ctx.request.body.retailername;
        const productname = ctx.request.body.productname;
        const res = await productService.findProduct( retailername, productname );
        ctx.body = {
            status: "success",
            operation: "find product",
            res
        }
    }

    async updateProduct (ctx) {
        const id = ctx.request.body.id;
        const product = ctx.request.body.product;
        const res = await productService.updateProduct( id, product );
        ctx.body = {
            status: "success",
            operation: "update product",
            res
        } 
    }

    async deleteProduct (ctx) {
        const id = ctx.request.body.id;
        const res = await productService.deleteProduct( id );
        ctx.body = {
            status: "success",
            operation: "delete product",
            res
        }
    }
}

module.exports = productControllers;