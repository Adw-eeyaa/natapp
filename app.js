
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const mongoURL = "mongodb+srv://headachebabaram44:azwaithIstheAdmin69@cluster0.ws8aqvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURL).then(()=>{
    console.log("react-native-db connected");
}).catch((e)=>{
    console.log(e);
});


app.get("/",(req,res)=>{
    res.send()
});
require('./UserDetails');
const User = mongoose.model("UserLogin");
app.post('/register',async(req,res)=>{
    const password = req.body;
    try{
        await User.create({
            
            password:password
        });
        res.send({status:"ok",data:"User logged in"});
    }
    catch(error){
        res.send({status:"error",data:"user not created"});
    }
})

app.listen(3050,()=>{
    console.log("Server is listening on port 3050");
});