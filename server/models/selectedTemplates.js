

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SelectedTemplatesSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    templateId:[],
    
    
},
{toObject:{virtuals:true}, toJSON: { virtuals: true } });
SelectedTemplatesSchema.virtual('templates', {
    ref: 'App',
    localField: 'templateId', 
    foreignField: 'id', 
  });
var SelectedTemplate = mongoose.model('SelectedTemplate',SelectedTemplatesSchema );

module.exports =SelectedTemplate ;