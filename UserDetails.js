const mongoose = require("mongoose");
const UserDetails = new mongoose.Schema({
    name:{type:String,unique:true},
    password:String
},{
    collection:"UserLogin"
});
mongoose.model("UserLogin",UserDetails)