

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SelectedFeaturesSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref : 'User'
    },
    templateId:Number,
    features:[],
    title:[],
    mvpFeature:[]
    
},
{ toJSON: { virtuals: true } });
SelectedFeaturesSchema.virtual('feature', {
    ref: 'Feature',
    localField: 'features', 
    foreignField: 'id', 
  });
var SelectedFeatures = mongoose.model('SelectedFeature',SelectedFeaturesSchema );

module.exports =SelectedFeatures ;