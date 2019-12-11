const mongoose = require('mongoose');

const cartSchemas = new mongoose.Schema({
    user_id: String,
    product_id: String
});

const cartModel = mongoose.model('cart', cartSchemas, 'cart');

module.exports = cartModel;