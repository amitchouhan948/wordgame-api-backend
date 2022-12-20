const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
   "name":{type:String, require:true},
   "level":{type:String, enum:["High","Medium","Low"], require:true},
   "score":{type:Number, default:0}
  }
  // - Name
  // - Difficulty level
);

const User = mongoose.model("user", userSchema);

module.exports = User;