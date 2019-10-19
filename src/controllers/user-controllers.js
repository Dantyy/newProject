const UserService = require ('../service/user-service');
const userService = new UserService();

class userControllers {
    async createUser (ctx) {
        const body = ctx.request.body;
        const res = await userService.createUser( body );
        ctx.body = {
            status: "success",
            operation: "sign up",
            res
        }
    }
    
    async loginUser (ctx) {
        const username = ctx.query.usermane;
        const password = ctx.query.password;
        const res = await userService.loginUser({username, password}, );
        ctx.body = {
            status: "success",
            operation: "log in",
            res
        }
    }

    async updateUser (ctx) {
        const username = ctx.query.usermane;
        const password = ctx.query.password;
        const body = ctx.request.body;
        const res= await userService.updateUser({ username, password }, body);
        ctx.body = {
            status: "success",
            operation: "update user",
            res
        }
    }

    async deleteUser (ctx) {
        const username = ctx.query.username;
        const password = ctx.query.password;
        const res = await userService.deleteUser({ username, password }, );
        ctx.body = {
            status: "success",
            operation: "delete user",
            res
        }
    }
}

module.exports = userControllers;