const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const AppSchema = new Schema({
    h3: {
        type: String,
        required: true,
        unique: true
    },
    p: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Currency,
        required: true
       
    },
    a: {
        type: String,
        
        unique: true
    },
    
    
    
});
var AppRows = mongoose.model('AppRow', AppSchema);

module.exports = AppRows;