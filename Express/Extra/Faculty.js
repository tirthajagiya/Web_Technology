const express=require('express');

const router = express.Router();

const bodyParser=require('body-parser');

router.use(bodyParser.urlencoded());

router.use('/',(req,res,next)=>{
    const {username,password}=req.body;
    if(username=='abc' && password=='123'){
        next();
    }
    else{
        res.send("Unothorized");
    }
})

router.get('/Faculty/Contact',(req,res)=>{
    res.send("987654321");
});

router.get('/Faculty/Email',(req,res)=>{
    res.send("fac@gmail.com");
});

module.exports=router;