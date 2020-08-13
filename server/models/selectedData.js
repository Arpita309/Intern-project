var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  Schema = mongoose.Schema
  let phasesSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    platforms:[],
    speed:String,
    id:Number

  },{_id:false})

let Delivery = new Schema({
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
  teamLocation:{
    type:String,
    required:true
  },
  phases:[phasesSchema],
  templateId:Number,
  platformIDs:[]
}
,{
  timestamps : true
});

module.exports = mongoose.model('Delivery', Delivery)

