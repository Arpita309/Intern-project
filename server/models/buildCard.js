const mongoose = require('mongoose'),
  Schema = mongoose.Schema
  

let BuildCard = new Schema({
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
  templateId :[],
  projectName:{
      type:String
  },
  projectType:{
    type:String
  },
  teamLocation:{
    type:String,
    required:true
  },
  features:[],
  phases:[],
  speed:String,
  status:String,
  platformIDs:[],
  price:String,
  duration:String,
  uniqId:String
},
 { toJSON: { virtuals: true },toObject: { virtuals: true },timestamps:true },
);
BuildCard.virtual('template', {
  ref: 'App',
  localField: 'templateId', 
  foreignField: 'id', 
});
BuildCard.virtual('platforms',{
  ref:'Platform',
  localField:'platformIDs',
  foreignField:'id'
});
BuildCard.virtual('phase',{
  ref:'Phase',
  localField:'phases',
  foreignField:'id'
});
BuildCard.virtual('workSpeed',{
  ref:'Speed',
  localField:'speed',
  foreignField:'title'
});

module.exports = mongoose.model('buildCard', BuildCard)