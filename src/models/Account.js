const {Schema, model, Types} = require('mongoose');

const schemaAccount = new Schema({
    number: {
        type: String,
        required: true
    },
    _user: {
        type: Types.ObjectId,
        ref: 'City'
    },
});

const Account = model("Account", schemaAccount);

module.exports = Account;