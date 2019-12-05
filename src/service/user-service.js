const userModule = require('../schemas/user-schemas');
const mongoose = require('mongoose');

class userService {
    async createUser ( body ) {
        const res = await userModule.create( body );
        if ( res.length === 0 ){
            throw new Error('Please enter email and password.')
        }
        else {
            return res;
        }
    }

    async loginUser ( email, password ) {
        const res = await userModule.find({email: email, password: password});
        if ( res.length === 0 ) {
            throw new Error('This is not our system user.');
        }
        else {
            return res;
        }
    }

    async updateUser ( email, password, firstName, lastName ) {
        const res = await userModule.update({ email: email, password: password }, { $set: {firstName, lastName} });
        if ( res.length === 0 ) {
            throw new Error('This is not our system user.');
        }
        else {
            return res;
        }
    }
    
    async deleteUser( id ) {
        const res = await userModule.deleteOne({ _id: mongoose.Types.ObjectId(id) });
        if ( res.length === 0 ) {
            throw new Error('Failed to delete');
        }
        else {
            return res;
        }
    }
}

module.exports = userService;