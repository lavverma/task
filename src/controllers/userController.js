const userDetailsModel = require("../models/userDetailsModel")
const userModel = require("../models/userModel")

async function createUser(req, res){
try{
   const data  = req.body
   if(!data){
    return res
    .status(400)
    .send({status : false , message : `data is required`})
   }

   const {fname , lname , email, password} = data

   if(!fname || typeof fname  != "string"){
    return res
    .status(400)
    .send({status : false , message : `First name is not correct`})
   }

   if(!lname || typeof lname  != "string"){
    return res
    .status(400)
    .send({status : false , message : `Last name is not correct`})
   }

   if(!email || !(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).test(email)){
    return res
    .status(400)
    .send({status : false , message : `EMail is required & should be valid`})
   }

   if(!password || password.length < 8){
    return res
    .status(400)
    .send({status : false , message : `Password is required & should be more than 8 character`})
   }

   const userDetail = await userDetailsModel.create({createdAt : new Date()})
   data.userDetailsId = userDetail._id

   const user = await userModel.create(data)

   return res
   .status(201)
   .send({status : true, data : user })
 }
catch(err){
    return res
    .status(500)
    .send({message : err.message})
}
}


async function userDetails(req, res){
    try{
        const userDetailsId = req.params.userDetailsId
    const data  = req.body
     if(!data){
    return res
    .status(400)
    .send({status : false , message : `data is required`})
   }

   const {DOB }  = data

   const ageDiff = new Date(Date.now() - new Date(DOB).getTime())
   
   data.age  = (ageDiff.getUTCFullYear() - 1970)
   
   const details  = await userDetailsModel.findByIdAndUpdate(userDetailsId, data, {new : true})
   return res
   .status(200)
   .send({status : true, data : details  })
    }
    
    catch(err){
    return res
    .status(500)
    .send({message : err.message})
}
}

async function getUser(req, res) {
    try{
const allUser = await userModel.find().populate("userDetailsId") 
return res
.status(200)
.send({status : true, data : allUser  })
    }
    catch(err){
        return res
        .status(500)
        .send({message : err.message})
    }
}

module.exports = {createUser, userDetails, getUser}