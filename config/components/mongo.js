const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '../../config.json')[env];
const mongourl = 'mongodb://'+config.host+":"+config.port+"/"+config.database;

module.exports = {
    bootstrap : () => {
        mongoose.connect(mongourl,{useNewUrlParser:true,useUnifiedTopology:true},(err,db)=>{
            if(err){
                throw err;
            }
            console.log('*** Connected to MongoDB ***');
        });
    }
}
