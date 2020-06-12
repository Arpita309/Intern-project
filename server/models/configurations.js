

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const attributes=new Schema({
    id:Number,
        title:String,
        price_multiplier:String,
        week_multiplier:String,
        description:String,
        icon:String,
        background:String
},{_id:false})
const PlatformSchema=new Schema({
    id:Number,
    type:String,
    attributes:[attributes],
    relationships: {
        
    }
},{_id:false})
 
const currencies =new Schema({
    
    id:Number,
    name:String,
    code:String,
    exchange_rate:String,
    multiplier:String,
    symbol:String,
    country_code:String,
    specing_price:String,
    icon_image_file_url:String,
    instant_spec_price:String,
    tax:Number,
    custom_prototype_price:String,
    post_upfront_price:String

},{_id:false}) 
  
const speed=new Schema({
    id:Number,
    title:String,
    price_multiplier:String,
    week_multiplier:String,
    description:String,
    name:String,
    icon:String
},{_id:false})

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
const build_attributes=new Schema({
    id:Number,
    title:String,
    description:String,
    type:String,
    background_color:String,
    position:Number,
    icon_url:String

})
const build_products=new Schema({
    id:Number,
    type:String,
    attributes: [build_attributes],
    relationships:[]

})
        
          



   
    

const ConfigurationSchema = new Schema({

   currency:[currencies],
   platforms:[PlatformSchema],
   prototype_platforms:[PlatformSchema],
   speed:[speed],
   build_phases:[build_phases],
   country_code:String,
  valid_user:Boolean,
  build_products:[build_products]
   
   
    
});
var Configurations = mongoose.model('Configuration',ConfigurationSchema );

module.exports =Configurations ;