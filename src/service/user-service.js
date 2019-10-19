const userModule = require('../schemas/user-schemas');

class userService {
    async createUser ( body ) {
        const res = await userModule.create( body );
        return res;
    }

    async loginUser ( username, password ) {
        return await userModule.findOne({ username, password }, );
        // console.log(res);
    }

    async updateUser ( username, password, body ) {
        const res = await userModule.findOneAndUpdate({ username, password }, body);
        return res;
    }
    
    async deleteUser( username, password ) {
        const res = await userModule.findOneAndDelete({ username, password }, );
        return res;
    }
}

module.exports = userService;