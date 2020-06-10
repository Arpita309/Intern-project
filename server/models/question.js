const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const Sections=require('./section')
const Apps =require('./apps')

const DetailsSchema=new Schema({
    id:Number,
      problem_statement:String,
      precedence: Number,
      applications: [Apps.schema]

})
const QuestionSchema = new Schema({
   
    section:Sections,
   section_details:[DetailsSchema]
    
});
var QuestionRows = mongoose.model('QuestionRow', QuestionSchema);

module.exports = QuestionRows;