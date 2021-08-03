const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send(`Hello World From The Sever`);
});

router.post('/register', (req,res)=>{
    console.log(req.body);
    res.json({message: req.body})
    // res.send("register Page")
})

module.exports = router;