const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send(`Hello World From The Sever`);
});
app.get('/about', (req,res)=>{
    res.send(`Hello about From The Sever`);
});
app.get('/contact', (req,res)=>{
    res.send(`Hello contact From The Sever`);
});



app.listen(5000, ()=>{
    console.log(`Server is Running at Port 3000`);
})