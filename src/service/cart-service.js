const mongoose = require('mongoose');
const userModel = require('../schemas/user-schemas');
const cartModel = require('../schemas/cart-schema');

class CartService {
    async createCartProduct(userId, productId) {
        const users = await userModel.find({_id: mongoose.Types.ObjectId(userId)});
        if (users.length === 0) {
            throw new Error('The user is not in the system');
        }
        const result = await cartModel.create({ userId, productId });
        return result;
    }
}

module.exports = CartService;
