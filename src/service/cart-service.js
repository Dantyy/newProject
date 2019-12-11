const productModel = require('../schemas/product-schemas');
const cartModel = require('../schemas/cart-schemas');
const mongoose = require('mongoose');

class cartService {
    async createCart ( user_id, product_id ) {
        const product = await productModel.find({ user_id: user_id, product_id: product_id });
        console.log("product:" + product);
        if (product.length === 0 ) {
            throw new Error('Please enter the correct product id and email.')
        }       
        else {
            const res = await cartModel.create({user_id: user_id, product_id: product_id});
            console.log("res"+res)
            return res
        };
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

    // async updateCart ( product_id, number ) {
    //     const res = cartModel.updateOne({ _id: product_id }, { $set: {number}} );
    //     if ( res.length === 0 ){
    //         throw new Error ('Fail to update the product in the cart.')
    //     }
    //     else {
    //         return res
    //     }
    // }

    async deleteCart ( _id ) {
        const res = cartModel.delete({ _id: mongoose.Types.ObjectId(_id) });
        if ( res.length === 0 ) {
            throw new Error ('Fail to delete the producrt from the cart');
        }
        else{
            return res;
        }
    }
}

module.exports = cartService;