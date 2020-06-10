

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const Sections=require('./section')
const Apps =require('./apps')



   
    

const TrendingSchema = new Schema({
   section:Sections,
 
   section_details:[Apps.schema]
    
});
var TrendingApps = mongoose.model('TrendingApp',TrendingSchema );

module.exports =TrendingApps ;