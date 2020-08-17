

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


 

const BundleDetailSchema = new Schema({

   id:Number,
  
selected_feature_count:Number,
title:String,
total_features:Number,
background_url:String,
bundle_template_names:String


    
},{ toJSON: { virtuals: true } });
BundleDetailSchema.virtual('features', {
    ref: 'Feature',
    localField: 'id', 
    foreignField: 'feature_bundle_id', 
  });
var BundleDetails = mongoose.model('BundleDetail',BundleDetailSchema );

module.exports =BundleDetails ;