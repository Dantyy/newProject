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
        const email = ctx.query.email;
        const password = ctx.query.password;
        const res = await userService.loginUser( email, password );
        ctx.body = {
            status: "success",
            operation: "log in",
            res
        }
    }

    async updateUser (ctx) {
        const email = ctx.query.email;
        const password = ctx.query.password;
        const body = ctx.request.body;
        const res= await userService.updateUser( email, password , body );
        ctx.body = {
            status: "success",
            operation: "update user",
            res
        }
    }

    async deleteUser (ctx) {
        const email = ctx.query.email;
        const password = ctx.query.password;
        const res = await userService.deleteUser( email, password );
        ctx.body = {
            status: "success",
            operation: "delete user",
            res
        }
    }
}

module.exports = userControllers;