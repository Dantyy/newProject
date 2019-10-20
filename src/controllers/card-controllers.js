const CardService = require('../service/card-service');
const cardService = new CardService();

class cardControllers {
    async getUserId (ctx) {
        const userId = ctx.params.uerId;
        return userId;
    }

    async createCard (ctx) {
        const body = ctx.request.body;
        const res = cardService.creatCard(body);
        ctx.body = {
            status: "success",
            operation: "creat card",
            res
        }
    }

    async findCard (ctx) {
        const retailername = ctx.query.retailername;
        const productname = ctx.query.productname;
        const res = cardService.findCard( retailername, productname );
        ctx.body = {
            status: "success",
            operation: "find card",
            res
        }
    }

    async updateCard (ctx) {
        const retailername = ctx.query.retailername;
        const productname = ctx.query.productname;
        const body = ctx.request.body;
        const res = cardService.updateCard( retailername, productname, body);
        ctx.body = {
            status: "success",
            operation: "update card",
            res
        }
    }

    async deleteCard (ctx) {
        const retailername = ctx.query.retailername;
        const productname = ctx.query.productname;
        const res = cardService.deleteCard( retailername, productname );
        ctx.body = {
            status: "success",
            operation: "delete card",
            res
        }
    }
}

module.exports = cardControllers;