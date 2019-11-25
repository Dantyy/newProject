const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    zip: Number,
    city: String,
    country: String,
    id: String,
    isHiddenProducts: Boolean,
    isPrivate: Boolean
})

const userModule = mongoose.model( 'user', userSchema, 'user' );

module.exports = userModule;