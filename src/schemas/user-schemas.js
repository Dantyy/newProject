const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    address: String,
    city,state: String,
    country: String,
    zip: Number,
    createAt: String,
    createBy: String,
    updateAt: String,
    updateBy: String 
});

const userModule = mongoose.model( 'user', userSchema, 'user' );

module.exports = userModule;