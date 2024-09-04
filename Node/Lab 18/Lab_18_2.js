const HTTP=require("http");
const fs=require('fs');

const newServer=HTTP.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url=='/contact'){
        data=fs.readFileSync("contact.html");
        res.end(data);
    }
    else if(req.url=='/bio'){
        data=fs.readFileSync("bio.html");
        res.end(data);
    }
    else if(req.url=='/image'){
        data=fs.readFileSync("image.html");
        res.end(data);
    }
    else if(req.url=='/about'){
        data=fs.readFileSync("about.html");
        res.end(data);
    }
    else{
        data=fs.readFileSync("home.html");
        res.end(data);
    }
    
});

newServer.listen(3000,()=>{
    console.log("Your Server Is Start Now.");
});