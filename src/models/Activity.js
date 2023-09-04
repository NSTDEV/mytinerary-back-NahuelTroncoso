const { Schema, model, Types } = require('mongoose');

const activitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
});

module.exports = model("Activity", activitySchema);