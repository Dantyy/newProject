const ProductService = require('../service/product-service');
const productService = new ProductService();

class productControllers {
    async getUserId (ctx) {
        const userId = ctx.params.userId;
        return userId
    }

    async createAProduct (ctx) {
        const body = ctx.request.body;
        const res = await productService.createAProduct(body);
        ctx.body = {
            status: "success",
            operation: "create a product",
            res
        }
    }

    async findAProduct (ctx) {
        const retailername = ctx.query.retailername;
        const productname = ctx.query.productname;
        const res = await productService.findAProduct({ retailername, productname }, );
        ctx.body = {
            status: "success",
            operation: "find a product",
            res
        }
    }

    async updateAProduct (ctx) {
        const retailername = ctx.query.retailername;
        const productname = ctx.query.productname;
        const body = ctx.request.body;
        const res = await productService.updateAProduct({ retailername, productname }, body );
        ctx.body = {
            status: "success",
            operation: "update a product",
            res
        } 
    }

    async deleteAProduct (ctx) {
        const retailername = ctx.query.retailername;
        const productname = ctx.query.productname;
        const  body = await productService.deleteAProduct({ retailername, productname }, );
        ctx.body = {
            status: "success",
            operation: "delete a product",
            res
        }
    }
}

module.exports = productControllers;