const express=require('express');
const stuRoute=require('./StudentRoute');
const facRoute=require('./Faculty');
const app=express();

app.use(stuRoute);
app.use(facRoute);

app.listen(3000,()=>{
    console.log("Server Started @3000");
})