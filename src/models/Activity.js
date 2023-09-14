const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
});

module.exports = model("Activity", activitySchema);