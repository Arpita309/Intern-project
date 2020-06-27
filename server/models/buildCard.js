const mongoose = require('mongoose'),
  Schema = mongoose.Schema
  let phasesSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    platform:[{
        type:String
    }],
    speed:String,
    textBlock:String

  },{_id:false})
  let payementSummary=new Schema({
    totalCost:String,
  monthlyCost:String,
  developmentDuration:String,
  builderCare:String,
  builderCloud:String
  },{_id:false})

let BuildCard = new Schema({
  _id : {
    type : Schema.Types.ObjectId,
    auto : true,
    required : true
  },
  _userID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref : 'User'
  },
  _similarAppsIDArray : [{
    type:Number,
    ref :'App'
  }],
  projectName:{
      type:String,
      required:true
  },
  projectType:{
    type:String,
    required:true
  },
  teamLocation:{
    type:String,
    required:true
  },
  featuresArray:[{
      type:Number,
      required:true
  }],
  phases:[phasesSchema],
  payementSummary:payementSummary
},{
  timestamps : true
});

module.exports = mongoose.model('buildCard', BuildCard)