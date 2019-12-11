const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    zip: Number,
    city: String,
    country: String
})

const userModule = mongoose.model( 'user', userSchema, 'user' );

module.exports = userModule;