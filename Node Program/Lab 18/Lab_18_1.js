const http=require('http');

const ourServer=http.createServer((req,res)=>{
    res.end("Hello World.");
});

const port=3000;

ourServer.listen(port,()=>{
    console.log("Server Started.");
});