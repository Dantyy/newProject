const mongoose = require('mongoose');

const cardSchemas = new mongoose.Schema({
    retailername: String,
    productname: String,
    singlePrice: Number,
});

const cardModel = mongoose.model('card', cardSchemas, 'card');

module.exports = cardModel;