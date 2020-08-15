

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BillingDetail=new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    zip:{
        type:Number,
        required:true
    },
    locality:{
        type:String,
        required:true
    },
    apartment:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    gst:{
        type:String,
        
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    templateId:Number
})


   
    


var BillingDetails = mongoose.model('BillingDetail',BillingDetail );

module.exports =BillingDetails ;