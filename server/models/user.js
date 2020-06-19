var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  name: {
    type: String,
    
  },
  username:String,
  password: {
    type: String,
   
  },
  contactNumber:{
      type:Number,
     
  },
  organisation:{type:String},
  facebookId:String,
  googleId:String

});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);