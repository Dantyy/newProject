const userModule = require('../schemas/user-schemas');

class userService {
    async createAUser ( username, password ) {
        const res = await userModule.create(username,password);
        return res;
    }

    async loginAUser ( username, password ) {
        const res = await userModule.findOne({username,password},);
        return res;
    }

    async updateAUser ( username, password, body ) {
        const res = await userModule.findOneAndUpdate({ username, password }, body);
        return res;
    }
    
    async deleteAUser( username, password ) {
        const res = await userModule.findOneAndDelete({username,password},);
        return res;
    }
}

module.exports = userService();