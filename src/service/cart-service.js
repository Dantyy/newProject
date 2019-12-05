const userModel = require('../schemas/user-schemas');
const productModel = require('../schemas/product-schemas');
const cartModel = require('../schemas/cart-schemas');
const mongoose = require('mongoose');

class cartService {
    async createCart ( user_id, product_id, body ) {
        const user_id = await userModel.find({ user_id });
        const product_id = await productModel.find({ product_id });
        if (user_id.length === 0 || product_id.length === 0 ) {
            throw new Error('Please enter the correct id.')
        }       
        else {
            const res = await cartModel.create({ body });
            return res};
    }

    async findCart ( user_id ) {
        const res = await cartModel.find({ user_id: user_id });
        if (res.length === 0){
            throw new Error('There is no product in the cart.');
        }
        else{
            return res;
        }
    }

    async updateCart ( product_id, number ) {
        const res = cartModel.update({ product_id: product_id }, { $set: {number}} );
        if ( res.length === 0 ){
            throw new Error ('Fail to update the product in the cart.')
        }
        else {
            return res
        }
    }

    async deleteCart ( _id ) {
        const res = cartModel.delete({ _id: mongoose.Types._id });
        if ( res.length === 0 ) {
            throw new Error ('Fail to delete the producrt from the cart');
        }
        else{
            return res;
        }
    }
}

module.exports = cartService;