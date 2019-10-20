const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    username: String,
    password: String,
    retaiername: String,
    productname: String,
    onePrice: Number,
    amount: Number,
    totalPrice: Number
});

const productModel = mongoose.model('product', productSchema, 'product');

module.exports = productModel;