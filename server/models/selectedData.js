var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  Schema = mongoose.Schema
  

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
  speed:''

}
,{
  timestamps : true
});

module.exports = mongoose.model('Delivery', Delivery)

