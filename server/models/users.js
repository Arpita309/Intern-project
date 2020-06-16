const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  contactNumber:{
      type:Number,
      required:true
  },
  organisation:{type:String}
});
module.exports = User = mongoose.model("users", UserSchema);