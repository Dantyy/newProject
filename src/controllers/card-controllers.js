const CardService = require('../service/card-service');
const cardService = new CardService();

class cardControllers {
    static async creatACard (ctx) {
        const body = ctx.request.body;
        const res = cardService.creatACard(body);
        ctx.body = {
            status: "success",
            operation: "creat a card",
            res
        }
    }

    static async findACard (ctx) {
        const retailername = ctx.query.retailername;
        const productname = ctx.query.productname;
        const res = cardService.findACard({ retailername, productname }, );
        ctx.body = {
            status: "success",
            operation: "find a card",
            res
        }
    }

    static async updateACard (ctx) {
        const retailername = ctx.query.retailername;
        const productname = ctx.query.productname;
        const body = ctx.request.body;
        const res = cardService.updateACard({ retailername, productname }, body);
        ctx.body = {
            status: "success",
            operation: "update a card",
            res
        }
    }

    static async deleteACard (ctx) {
        const retailername = ctx.query.retailername;
        const productname = ctx.query.productname;
        const res = cardService.deleteACard({ retailername, productname }, );
        ctx.body = {
            status: "success",
            operation: "delete a card",
            res
        }
    }
}

module.exports = cardControllers();