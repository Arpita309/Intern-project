const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PriceAndDurationSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    templateId:{
        type:Number,
        ref:'Apps'
    },
    price:String,
    weeks:String,
    
});
var PriceAndDuration = mongoose.model('PriceDuration', PriceAndDurationSchema);

module.exports = PriceAndDuration;