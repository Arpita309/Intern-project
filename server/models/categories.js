const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const categories=new Schema({
    id:Number,
      title:String,
      description:String,
      subtitle:String,
      background:String,
      icon:String,
      template_count: Number
})
const Platforms=new Schema({
    id:Number,
      title:String,
      price_multiplier:Number,
      week_multiplier:Number,
      description:String,
      icon:String,
      background:String
})
const CategoriesSchema = new Schema({
    categories:[categories],
    platforms:[Platforms],
    max_template_cost:Number,
  min_template_cost:Number,
  max_global_cost:Number,
  min_global_cost:Number,
  max_template_week:Number,
  min_template_week:Number,
  max_global_week:Number,
  min_global_week:Number
    
    
});
var Categories = mongoose.model('Category',CategoriesSchema);

module.exports =Categories;