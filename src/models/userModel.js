const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({
  fname : {
    type : String,
    required : true,
    trim : true
  },
  lname : {
    type : String,
    required : true,
    trim : true
},
email :{
      type : String,
      required : true,
      trim : true
  },
password :{
      type : String,
      required : true,
      trim : true
  },
  userDetailsId : {
    type : objectId,
    ref : "UserDetails",
    required: true
  }
})

module.exports = mongoose.model("User", userSchema)