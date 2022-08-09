const router =require("express").Router();
let  RegisterUserModel=require("../models/Register");

router.route("/read").get((req,res)=>{
    RegisterUserModel.find()
    .then((users)=>res.json(users))
    .catch((err)=>res.status(400).json("error "+err));
});

//Adding user
router.route("/insertuserdata").post((req,res)=>{

    const userName=req.body.userName;
    const userPassword=req.body.userPassword;
    const userdetails=new RegisterUserModel({userName:userName,userPassword:userPassword});
    userdetails
        .save()
        .then(()=>res.json("user added"))
        .catch((err)=>res.status(400).json("error "+err));
    })

module.exports=router;