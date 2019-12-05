const CartService = require('../service/cart-service');
const cartService = new CartService();

class cartControllers {

    async createCart (ctx) {
        const user_id = ctx.request.body.user_id;
        const product_id = ctx.request.body.product_id;
        const res = cartService.createCart( user_id, product_id );
        ctx.body = {
            status: "success",
            operation: "creat cart",
            res
        }
    }

    async findCart (ctx) {
        const user_id = ctx.request.body.user_id;
        const res = cartService.findCart(user_id);
        ctx.body = {
            status: "success",
            operation: "find cart",
            res
        }
    }

    async updateCart (ctx) {
        const product_id = ctx.request.body.product_id;
        const number = ctx.request.body.number;
        const res = cartService.updateCart( product_id, number );
        ctx.body = {
            status: "success",
            operation: "update cart",
            res
        }
    }

    async deleteCart (ctx) {
        const _id = ctx.request.body._id;
        const res = cartService.deleteCart( _id );
        ctx.body = {
            status: "success",
            operation: "delete cart",
            res
        }
    }
}

module.exports = cartControllers;