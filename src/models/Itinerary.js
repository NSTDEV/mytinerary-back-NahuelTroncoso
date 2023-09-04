const { Schema, model, Types } = require('mongoose');

const tagSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
});

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
    description: {
        type: String,
        required: true,
    },
    activities: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    }],
    duration: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    tags: [tagSchema],
    comments: [{
        type: String
    }],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = model("Itinerary", itinerarySchema);