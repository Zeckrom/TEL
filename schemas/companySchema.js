const mongoose = require('mongoose');
let CompanySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    Description : {
        type : String,
    },
    picture : {
        type : String,

    },

})
module.exports = mongoose.model('category', CompanySchema);
