const mongoose = require('mongoose');

//defining schema and creating its model
const userModel = mongoose.model('user', new mongoose.Schema({
    user_name : {type : String, required : true,unique : true},
    password : {type : String, required : true} 
}))

module.exports = userModel;