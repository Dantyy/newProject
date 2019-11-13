const ProductService = require('../service/product-service');
const productService = new ProductService();

class productControllers {
    async getUserId (ctx) {
        console.log("getUserId");
        const id = ctx.params.id;
        return id;
    }

    async createProduct (ctx) {
        console.log("createProduct")
        const body = ctx.request.body;
        const res = await productService.createProduct(body);
        ctx.body = {
            status: "success",
            operation: "create product",
            getUserId,
            res
        }
    }

    async findProduct (ctx) {
        const retailername = ctx.query.retailername;
        const productname = ctx.query.productname;
        const res = await productService.findProduct( retailername, productname );
        ctx.body = {
            status: "success",
            operation: "find product",
            getUserId,
            res
        }
    }

    async updateProduct (ctx) {
        const retailername = ctx.query.retailername;
        const productname = ctx.query.productname;
        const body = ctx.request.body;
        const res = await productService.updateProduct( retailername, productname, body );
        ctx.body = {
            status: "success",
            operation: "update product",
            res
        } 
    }

    async deleteProduct (ctx) {
        const retailername = ctx.query.retailername;
        const productname = ctx.query.productname;
        const  body = await productService.deleteProduct( retailername, productname );
        ctx.body = {
            status: "success",
            operation: "delete product",
            res
        }
    }
}

module.exports = productControllers;