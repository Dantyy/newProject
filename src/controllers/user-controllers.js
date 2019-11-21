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
        const email = ctx.request.body.email;
        const password = ctx.request.body.password;
        const res = await userService.loginUser( email, password );
        ctx.body = {
            status: "success",
            operation: "log in",
            res
        }
    }

    async updateUser (ctx) {
        const email = ctx.request.body.email;
        const password = ctx.request.body.password;
        const firstName = ctx.request.body.firstName;
        const lastName = ctx.request.body.lastName;
        const res = await userService.updateUser( email, password, firstName, lastName );
        console.log(email, password, firstName, lastName, res);
        ctx.body = {
            status: "success",
            operation: "update user",
            res
        }
    }

    async deleteUser (ctx) {
        const id = ctx.request.body._id;
        const res = await userService.deleteUser( id );
        ctx.body = {
            status: "success",
            operation: "delete user",
            res
        }
    }
}

module.exports = userControllers;