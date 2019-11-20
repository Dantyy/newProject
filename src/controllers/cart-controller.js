const CartService = require('../service/cart-service');

const cartService = new CartService();

class CartController {
    static async createCartProduct(ctx) {
        const userId = ctx.request.body.user_id;
        const productId = ctx.request.body.product_id;
        const res = await cartService.createCartProduct(userId, productId);
        ctx.body = {
            status: 'success',
            data: res,
        }
    }
}

module.exports = CartController;
