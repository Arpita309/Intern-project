const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PlatformSchema=new Schema({
    platforms:[],
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    templateId:Number
})
var Platforms = mongoose.model('Platform',PlatformSchema );

module.exports =Platforms ;