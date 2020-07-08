var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const currency=new Schema({
    "code":String,
"custom_prototype_price":String,
"exchange_rate":String,
"multiplier":String,
"duration_multiplier":String
},{_id:false})
const platforms=new Schema({
    "background":String,
    "description":String,
    "icon":String,
    "id":Number,
    "price_multiplier":String,
    "selected":Boolean,
    "title":String,
    "week_multiplier":String
},{_id:false})
const features=new Schema({
    "effective_cost":String,
    "effective_weeks":String,
    "feature_price":String,
    "feature_weeks":String,
    "id":Number,
    "price":String,
    "selected":Boolean,
"title":String,
"weeks":String,
platforms
},{_id:false})
const Detail=new Schema({
  _userID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref : 'User'
  },
  application_ids:[],

  
})

module.exports = mongoose.model('User', User);