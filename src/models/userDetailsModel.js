const mongoose = require("mongoose")

const userDetailsSchema  = new mongoose.Schema({
  DOB : {
    type : String,
    trim : true
  },
  age :{
    type : Number,
    trim : true
  },
  address : {
    type : String,
    trim : true
  },
  createdAt : {
    type : Date,
    required : true
  }
},{timestamps : true})

module.exports = mongoose.model("UserDetails", userDetailsSchema)