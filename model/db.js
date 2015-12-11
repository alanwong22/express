var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = {
    "name" : String,
    "address" : String
};
// create model if not exists.
module.exports = mongoose.model('userLogin',userSchema);