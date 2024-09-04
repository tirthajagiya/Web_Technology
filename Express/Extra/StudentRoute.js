const express=require('express');

const router = express.Router();

const bodyParser=require('body-parser');

router.get('/Student/Contact',(req,res)=>{
    res.send("123456789");
});

router.get('/Student/Email',(req,res)=>{
    res.send("stu@gmail.com");
});

module.exports=router;