

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
 
const Feature_screenshot=new Schema({
    ios:{type:String},
    web:{type:String},
    android:{type:String}
},{_id:false})
const FeatureSchema = new Schema({
   
    id:Number,
    title:{
        type:String,
        required:true
    },
    weeks:{
        type:String
    },
    user_requested:{type:Boolean},
    status:{type:String},
    feature_bundle_id:{type:String},
        difficulty:{type:Number},
        algorithm: {type:String},
        stream_media:{type:Boolean},
        interface_type:{type:String},
        reference_urls:{type:String},
        effective_cost:{type:Currency},
        effective_weeks:{type:String},
        complexity:{type:String} ,
        price:{type:Currency},
        feature_price:{type:Currency},
        feature_weeks:{type:String},
        icon: {type:String},
        background:{type:String},
        feature_screenshots: [Feature_screenshot],
        template_ids: [],
        selected:{type:Boolean},
        is_mvp_feature: {type:Boolean}
    
    
},{_id:false});
const attributesSchema=new Schema({
    id:Number,
      title:String,
      description:String,
    precedence: String,
      builder_number:Number,
      app_builder_icon_url:String,
      subtitle:String,
      platform_ids: [],
      category_ids: [],
      reference_urls:String,
      user_requested:Boolean,
      status:String,
      restrict_edit:Boolean,
      direct_checkout:Boolean,
      week_difference:String,
      meta_title:String,
      meta_description:String,
      prototype_visible:Boolean,
      pricing_modal:String,
      builder_care_price:String,
      monthly_price:String,
      month_count:String,
      feature_count:Number,
      products: [],
      mobile_cover_image_url:String,
      web_cover_image_url:String,
      features:[FeatureSchema],
     

},{_id:false})


   
    

const AppDetailSchema = new Schema({

   id:Number,
   type:String,
   attributes:[attributesSchema],
   platforms:[PlatformSchema],
   feature_ids:[],
   upfront_discount_month:Number,
   currency_id:Number,
    currency:String
   
    
});
var AppDetails = mongoose.model('AppDetail',AppDetailSchema );

module.exports =AppDetails ;