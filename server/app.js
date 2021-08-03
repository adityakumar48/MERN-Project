const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn')
const PORT = process.env.PORT;


// MiddleWare
const middleware = (req,res,next) =>{
    console.log(`Helllo My Middleware`);
    next();
}
app.get('/', (req,res)=>{
    res.send(`Hello World From The Sever`);
});
app.get('/about',middleware, (req,res)=>{
    res.send(`Hello about From The Sever`);
});
app.get('/contact', (req,res)=>{
    res.send(`Hello contact From The Sever`);
});



app.listen(PORT, ()=>{
    console.log(`Server is Running at Port ${PORT}`);
})