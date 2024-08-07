const express=require('express');

const app=express();

arr=['a1','a2','a3','a4','a5'];

app.get("/student",(req,res)=>{
    res.send(arr);
})

app.get('/student/:index',(req,res)=>{
    res.send(arr[req.params.index]);
})

app.post('/student/:name',(req,res)=>{
    arr.push(req.params.name);
    res.send(arr);
})

app.delete('/student/:index',(req,res)=>{
    arr.splice(req.params.index,1);
    res.send(arr);
})

app.patch('/student/:index/:newName',(req,res)=>{
    arr[req.params.index]=req.params.newName;
    res.send(arr);
})

app.listen(3000,()=>{
    console.log("Server Start.");
})