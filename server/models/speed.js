

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const speed=new Schema({
    id:Number,
    title:String,
    price_multiplier:String,
    week_multiplier:String,
    description:String,
    name:String,
    icon:String
})

var Speeds = mongoose.model('Speed',speed);

module.exports =Speeds ;