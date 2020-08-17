

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const build_phases=new Schema({
    id:Number,
    title:String,
    description:String,
    price_multiplier:String,
    week_multiplier:String,
    index:Number,
    position:Number,
    icon:String,
    background:String
})

var Phases = mongoose.model('Phase',build_phases );

module.exports =Phases ;