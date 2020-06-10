const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const SectionSchema = new Schema({
    _id:Number,
    title:String,
    description:String,
    is_disabled:Boolean,
    priority_order:Number,
    section_type:String
    
    
});
var Sections = mongoose.model('Section', SectionSchema);

module.exports = SectionSchema;