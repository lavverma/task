const express = require("express")
const mongoose = require("mongoose")
const route  = require("./routes/route")
const PORT = 3000
const DATA_BASE_LINK = "mongodb+srv://lavverma:8573007234@cluster0.hdldl.mongodb.net/user?retryWrites=true&w=majority"
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

mongoose.set('strictQuery', false);
mongoose.connect(DATA_BASE_LINK, {
    useNewUrlParser : true
})
.then(()=>console.log(`Data Base is connected`))
.catch((err)=>console.log(err))

app.use("/" , route)

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})