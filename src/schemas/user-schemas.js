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
    isHiddenProducts: Boolean,
    isPrivate: Boolean,
    retailername: String,
    productname: String,
})

const userModule = mongoose.model( 'user', userSchema, 'user' );

module.exports = userModule;