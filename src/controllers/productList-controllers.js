const ProductListService = require('../service/productList-service');
const productListService = new ProductListService();

class productListControllers {
    async findProductList (ctx) {
        const email = ctx.request.body.email;
        const password = ctx.request.body.password;
        const res = await productListService.findProductList( email, password );
        console.log("controllers------------------------------------"+res)
        ctx.body = {
            status: "success",
            operation: "find product list",
            res
        }
    }

}

module.exports = productListControllers;