const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const AppsSchema = new Schema({
    h3: {
        type: String,
        required: true
        
    },
    p: {
        type: String,
        required: true
       
    },
    img: {
        type: String,
        required: true
        
    },
    price: {
        type: Currency,
        required: true
       
    },
    a: {
        type: String
        
        
    },
    
    
    
});
var AppRows = mongoose.model('AppRow', AppsSchema);

module.exports = AppRows;