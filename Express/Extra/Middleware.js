const express=require('express');

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded());

app.use('/Faculty',(req,res,next)=>{
    const { username, password } = req.body;
    if(username=="abc" && password=="123"){
        next();
    }
    else{
        res.send("Unothorized");
    }
})

app.get('/Student/Email',(req,res)=>{
    res.send("stu@gmail.com");
})

app.get('/Student/Contact',(req,res)=>{
    res.send("123456789");
})

app.get('/Faculty/Email',(req,res)=>{
    res.send("fac@gmail.com");
})

app.get('/Faculty/Contact',(req,res)=>{
    res.send("987456321");
})

app.listen(3000,()=>{
    console.log("Server Started @3000");
})