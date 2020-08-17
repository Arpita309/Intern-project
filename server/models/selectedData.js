var mongoose = require('mongoose');
var Schema = mongoose.Schema;
  const Apps=require('./apps')
let Delivery = new Schema({
  _id : {
    type : Schema.Types.ObjectId,
    auto : true,
    required : true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref : 'User'
  },
  teamLocation:{
    type:String,
    required:true
  },
  phases:[],
  templateId:Number,
  platformIDs:[],
  speed:String

},
 { toJSON: { virtuals: true } }
);
Delivery.virtual('template', {
  ref: 'App',
  localField: 'templateId', 
  foreignField: 'id', 
});
Delivery.virtual('platforms',{
  ref:'Platform',
  localField:'platformIDs',
  foreignField:'id'
});
Delivery.virtual('phase',{
  ref:'Phase',
  localField:'phases',
  foreignField:'id'
});
Delivery.virtual('workSpeed',{
  ref:'Speed',
  localField:'speed',
  foreignField:'title'
});
module.exports = mongoose.model('Delivery', Delivery)

