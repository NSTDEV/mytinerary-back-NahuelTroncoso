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
        type: String
    },
    language: {
        type: String
    },
    price: {
        type: String
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    itinerary: [{
        type: Schema.Types.ObjectId,
        ref: 'Itinerary',
    }]
});

module.exports = model('City', citySchema);