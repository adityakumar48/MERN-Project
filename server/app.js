const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
dotenv.config({path:'./config.env'});

require('./db/conn')
// const User = require('./model/userSchema')
app.use(cookieParser())
app.use(express.json());
// link Router File
app.use(require('./router/auth'))



const PORT = process.env.PORT;


// app.get('/about',middleware, (req,res)=>{
//     res.send(`Hello about From The Sever`);
// });
// app.get('/contact', (req,res)=>{
//     res.send(`Hello contact From The Sever`);
// });



app.listen(PORT, ()=>{
    console.log(`Server is Running at Port ${PORT}`);
})