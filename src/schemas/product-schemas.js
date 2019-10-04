const mongoose = require('mongoose');

const productSchema = new mongoose.schema({
    username: String,
    password: String,
    retaierName: String,
    productName: String,
    onePrice: Number,
    amount: Number,
    totalPrice: Number
});

const productModel = mongoose.model('product', productSchema, 'product');

module.exports = productModel;