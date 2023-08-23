const { Schema, model } = require("mongoose");

const citySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true
    },
    accounts: [{
        type: Schema.Types.ObjectId,
        ref: 'Account'
    }]
});

module.exports = model('City', citySchema);
