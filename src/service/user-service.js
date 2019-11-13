const userModule = require('../schemas/user-schemas');

class userService {
    async createUser ( body ) {
        const res = await userModule.create( body );
        return res;
    }

    async loginUser ( email, password ) {
        const res = await userModule.findOne({ email, password }, );
        return res;
    }

    async updateUser ( email, password, body ) {
        const res = await userModule.findOneAndUpdate({ email, password }, {body});
        return res;
    }
    
    async deleteUser( email, password ) {
        const res = await userModule.findOneAndDelete({ email, password }, );
        return res;
    }
}

module.exports = userService;