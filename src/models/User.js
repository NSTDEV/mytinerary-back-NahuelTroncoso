const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: Types.ObjectId,
        ref: 'City'
    },
    image: {
        type: String
    },
    itineraries: [{
        type: Schema.Types.ObjectId,
        ref: 'Itinerary'
    }]
});

module.exports = model('User', userSchema);