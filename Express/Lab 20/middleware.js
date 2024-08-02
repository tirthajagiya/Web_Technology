const express=require('express');

const app=express();

const a=(req,res,next)=>{
    console.log("Heloo1");
    next();
}

const b=(req,res,next)=>{
    console.log("Heloo2");
    next();
}

app.get('/home',a,b,(req,res,next)=>{
    res.send("Hello World From Home");
    next();
})

app.listen(3000,()=>{
    console.log("Server Start @3000");
});