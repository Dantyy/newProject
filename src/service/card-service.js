const cardModel = require('../schemas/card-schemas');

class cardService {
    async createCard ( body ) {
        const res = cardModel.create( body );
        return res;
    }

    async findCard ( retailername, productname ) {
        const res = cardModel.findOne({ retailername, productname }, );
        return res;
    }

    async updateCard ( retailername, productname, body ) {
        const res = cardModel.findOneAndUpdate({ retailername, productname }, body );
        return res;
    }

    async deleteCard (retailername, productname ) {
        const res = cardModel.findOneAndDelete({ retailername, productname }, );
        return res;
    }
}

module.exports = cardService;