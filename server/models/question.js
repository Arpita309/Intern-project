const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const liSchema=new Schema({
    inputId:{
        type: String,
        required:true,
        unique:true
    },
    img:{
    type: String,
    required:true
    },
    liItem:{
        type:String,
        required:true
    }

})
const QuestionSchema = new Schema({
    h3: {
        type: String,
        required: true,
        unique: true
    },
    
    li1:[liSchema],
    li2:[liSchema],
    li3:[liSchema],
    li4:[liSchema]
    
    
});
var QuestionRows = mongoose.model('QuestionRow', QuestionSchema);

module.exports = QuestionRows;