const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: {
        type: String
    },
    itineraries: [{
        type: Schema.Types.ObjectId,
        ref: 'Itinerary'
    }],
    country: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    picture: {
        type: String
    },
    roll: {
        type: String
    }
});

module.exports = model('User', userSchema);