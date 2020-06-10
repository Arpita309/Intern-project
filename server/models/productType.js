const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const Sections=require('./section')

const SectionDetails=new Schema({
      _id:Number,
      title:String,
      description:String,
      background_color:String,
      position:Number,
      icon_url:String
})


   
    

const ProductType = new Schema({

   section:Sections,
   section_details:[SectionDetails]
    
});
var ProductTypes = mongoose.model('ProductType',ProductType );

module.exports = ProductTypes;