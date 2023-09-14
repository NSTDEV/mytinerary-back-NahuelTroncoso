const { Schema, model, Types } = require('mongoose');

const itinerarySchema = new Schema({
    city: {
        type: Types.ObjectId,
        ref: "City",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    tags: [{
        type: String,
        required: true
    }],
    duration: {
        type: String,
        required: true,
    },
    activities: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity',
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