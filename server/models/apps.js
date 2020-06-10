const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;



const Feature_screenshot=new Schema({
    ios:{type:String},
    web:{type:String},
    android:{type:String}
},{_id:false})
const Screenshot=new Schema({
    id:Number,
        file_url:{type:String},
        file_name:{type:String}
})
const Bundles=new Schema({
    id:Number,
        title:{type:String},
        total_features_price:{type:Currency},
        total_features_week:{type:Number},
        icon:{type:String},
        background:{type:String}
})
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
    
    
});


const AppInfoSchema = new Schema({
   
    id:Number,
    title:{type:String,required:true},
    description:{type:String},
    precedence:{type:Number},
    builder_number:{type:Number},
    app_builder_icon_url:{type:String},
    subtitle:{type:String},
    reference_urls:{type:String},
    user_requested:{type:Boolean},
    status:{type:String},
    slug:{type:String},
    restrict_edit:{type:Boolean},
    direct_checkout:{type:Boolean},
    week_difference:{type:String},
    meta_title:{type:String},
    meta_description:{type:String},
    prototype_visible:{type:Boolean},
    pricing_modal:{type:String},
    month_count:{type:String},
    screenshots:[Screenshot],
    feature_count:{type:Number},
    bundles:[Bundles],
    icon:{type:String},
    background:{type:String},
    template_price:{type:Currency},
    template_weeks:{type:String},
    feature_ids:[],
    features: [FeatureSchema],
    monthly_price:{type:String},
    builder_care_price:{type:String},
    platform_ids: [],
    category_ids: [],
    currency_id:{type:String}
});
var Apps = mongoose.model('App', AppInfoSchema);

module.exports = Apps;