const express=require('express');
const path=require('path');

const app=express();

// app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,"About.html"));
// });

app.get('/about/:name',(req,res)=>{
    const myname=req.params.name;
    res.send(`Hello ${myname} From About`);
});

const portnumber=3000;
app.listen(portnumber,()=>{
    console.log("Server Start.");
})