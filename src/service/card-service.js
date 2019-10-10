const cardModel = require('../schemas/card-schemas');

class cardService {
    async createACard ( body ) {
        const res = cardModel.create( body );
        return res;
    }

    async findACard ( retailername, productname ) {
        const res = cardModel.findOne({ retailername, productname }, );
        return res;
    }

    async updateACard ( retailername, productname, body ) {
        const res = cardModel.findOneAndUpdate({ retailername, productname }, body );
        return res;
    }

    async deleteACard (retailername, productname ) {
        const res = cardModel.findOneAndDelete({ retailername, productname }, );
        return res;
    }
}

module.exports = cardService;