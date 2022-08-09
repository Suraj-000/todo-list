const mongoose=require('mongoose')

const registerSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    userPassword:{
        type:String,
        required:true,
    },
});

const RegisterUser=mongoose.model("RegisterUser",registerSchema);
module.exports=RegisterUser;