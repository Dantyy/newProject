const UserService = require ('../service/user-service');
const userService = new UserService();

class userControllers {
    async createAUser (ctx) {
        const body = ctx.request.body;
        const res = await userService.createUser( body );
        ctx.body = {
            status: "success",
            operation: "sign up",
            res
        }
    }
    
    async loginAUser (ctx) {
        const username = ctx.query.usermane;
        const password = ctx.query.password;
        const res = await userService.loginUser( {username, password}, );
        ctx.body = {
            status: "success",
            operation: "log in",
            res
        }
    }

    async updateAUser (ctx) {
        const username = ctx.query.usermane;
        const password = ctx.query.password;
        const body = ctx.request.body;
        const res= await userService.updateUser({ username, password }, body);
        ctx.body = {
            status: "success",
            operation: "update a user",
            res
        }
    }

    async deleteAUser (ctx) {
        const username = ctx.query.username;
        const password = ctx.query.password;
        const res = await userService.deleteUser({ username, password }, );
        ctx.body = {
            status: "success",
            operation: "delete a user",
            res
        }
    }
}

module.exports = userControllers;