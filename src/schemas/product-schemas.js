const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    user_id: String,
    product_id:String,
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