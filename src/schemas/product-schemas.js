const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    email: String,
    password: String,
    product:{
        retailername: String,
        productname: String,
        price: Number,
        number: Number,
        total: Number
    }
});

const productModel = mongoose.model('product', productSchema, 'product');

module.exports = productModel;