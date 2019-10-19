const mongoose = require('mongoose');
let CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
    },
    picture: {
        type: String,

    },
    companies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'company' }],


})
module.exports = mongoose.model('category', CategorySchema);
