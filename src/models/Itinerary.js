const { Schema, model, Types } = require('mongoose');

const itinerarySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: Types.ObjectId,
        ref: "City",
        required: true,
    },
    activities: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity',
        required: true
    }],
    price: {
        type: Number,
        required: true,
    },
    tags: [{
        type: String,
        required: true
    }],
    comments: [{
        type: String
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = model("Itinerary", itinerarySchema);