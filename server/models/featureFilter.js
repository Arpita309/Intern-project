

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const Apps=require('./apps')
const functionality=new Schema({
    id:Number,
    title:String,
    selected:Boolean
},{_id:false})

const featureFilterSchema = new Schema({
    functionality:[functionality],
    templates:[Apps.schema]
   
    
});
var FeatureFilters = mongoose.model('FeatureFilter',featureFilterSchema );

module.exports =FeatureFilters;