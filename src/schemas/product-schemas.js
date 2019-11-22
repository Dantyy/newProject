const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    username: String,
    password: String,
    product:{
        retaiername: String,
        productname: String,
        price: Number
    }
});

const productModel = mongoose.model('product', productSchema, 'product');

module.exports = productModel;