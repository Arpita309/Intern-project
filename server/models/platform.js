

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlatformSchema=new Schema({
    id:Number,
    title:String,
    price_multiplier:String,
    week_multiplier:String,
    description:String,
    icon:String,
    background:String
})
 
var Platforms = mongoose.model('Platform',PlatformSchema );

module.exports =Platforms ;