

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const Sections=require('./section')
const Apps =require('./apps')



   
    

const ApplicationsSchema = new Schema({

   section:Sections,
   section_details:[Apps.schema]
    
});
var Applications = mongoose.model('Application',ApplicationsSchema );

module.exports =Applications ;