const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PlatformSchema=new Schema({
    platforms:[
    ],
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    templateId:Number
},{ toJSON: { virtuals: true } });
PlatformSchema.virtual('platform', {
    ref: 'Platform',
    localField: 'platforms', 
    foreignField: 'id', 
  });
var selectedPlatforms = mongoose.model('selectedPlatform',PlatformSchema );

module.exports =selectedPlatforms ;