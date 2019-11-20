const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: String,
    productId: String,
});

module.exports = mongoose.model('cart', cartSchema, 'cart');
