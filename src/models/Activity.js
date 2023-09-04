const { Schema, model, Types } = require('mongoose');

const activitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    duration: {
        type: Number,
        required: true,
    },
});

module.exports = model("Activity", activitySchema);