const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const Feature_screenshot=new Schema({
    ios:{type:String},
    web:{type:String},
    android:{type:String}
})
const FeatureSchema = new Schema({
   
    id:{
        type:String,
        required:true
    },
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
var Features = mongoose.model('Feature', FeatureSchema);

module.exports = Features;