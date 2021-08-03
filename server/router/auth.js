const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello World From The Sever`);
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please Fill all Property" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email Already Exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password Are not Matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();
      res.status(201).json({ message: "User Registered Succesfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please Fill Vaild Details " });
    }

    const userLogin = await User.findOne({ email: email });
    if(userLogin){
        const isMatch = await bcrypt.compare(password, userLogin.password)
        
        const token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie('jwttoken',token,{
          expires:new Date(Date.now()+ 25892000000),
          httpOnly:true,
        });

        if (!isMatch) {
          res.status(400).json({ error: "Invalid Credientials " });
        } else {
          res.json({ message: "user Signin Successfully" });
        }
    }else {
        res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
