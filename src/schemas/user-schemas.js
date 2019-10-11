const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    zip: Number,
    city: String,
    country: String,
    userUuid: String,
    id: String,
    isHiddenProducts: String,
    isPrivate: String,
    retailers:{
        account: Number
    },
    products:{
        account: Number,
        totalPrice: String
    }
})

const userModule = mongoose.model( 'user', userSchema, 'user' );

module.exports = userModule;