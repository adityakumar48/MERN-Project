const express = require('express');
const router = express.Router();

require('../db/conn')
const User  = require('../model/userSchema')

router.get('/', (req,res)=>{
    res.send(`Hello World From The Sever`);
});

router.post('/register', async (req,res)=>{
    const {name, email, phone, work, password,cpassword } = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"Please Fill all Property"})
    }
   
    try{
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"Email Already Exist"})
        }
        const user = new User({name, email, phone, work, password,cpassword})

     await user.save();
       res.status(201).json({message:"User Registered Succesfully"})
     
    } catch(err){
        console.log(err)
    }

    


})

router.post('/signin',async (req,res)=>{
    

    try{
        const { email, password } = req.body;
        if(!email || !password ){
            return res.status(400).json({error:"Please Fill Vaild Details "})
        }

        const userLogin = await User.findOne({email:email});

        !userLogin?res.status(400).json({error:"Please Enter Vaild Details "}):res.json({message:"user Signin Successfully"})

    
    }catch(err){
        console.log(err)
    }


    
    
})
module.exports = router;