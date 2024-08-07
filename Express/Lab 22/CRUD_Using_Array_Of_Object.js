const express=require('express');

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded());

const students=[
    {
        id:1111,
        Name:"Prince",
        Age:11,
        Spi:6
    },
    {
        id:2222,
        Name:"Shyam",
        Age:22,
        Spi:8
    }
]

//read

app.get("/students",(req,res)=>{
    res.send(students);
});

app.get("/students/:id",(req,res)=>{

    // const ans1=students.find((stu)=>{
    //     if(stu.id==req.params.id){
    //         return true;
    //     }
    // })
    // res.send(ans);

    //Short Method

    const ans=students.find(stu=>stu.id==req.params.id);
    res.send(ans);
})

//create

app.post("/students",(req,res)=>{
    students.push(req.body);
    res.send(students);
})

//update

app.patch("/students/:id",(req,res)=>{
    // const idToEdit=students.findIndex((stu)=>{
    //     if(stu.id==req.params.id){
    //         return true;
    //     }
    // })

    const idToEdit=students.findIndex(stu=>stu.id==req.params.id);

    students[idToEdit]=req.body;
    res.send(students);
})

//delete

app.delete("/students/:id",(req,res)=>{

    const idToDelete=students.findIndex(stu=>stu.id==req.params.id);

    students.splice(idToDelete,1);

    res.send(students);
})

//search

app.get("/students/search/:name",(req,res)=>{

    const obj=students.filter(stu=>stu.Name.indexOf(req.params.name)>-1);

    res.send(obj);
})

//filter

app.get("/students/filter1/:from1",(req,res)=>{

    res.send(students[req.params.from1]);

    // const filterStudent=students.filter(stu=>{
    //     if((req.params.from<=stu.Spi) && (req.params.to>=stu.Spi)){
    //         return true;
    //     }
    // });

    // res.send(filterStudent);
})

app.listen(3000,()=>{
    console.log("Start");
})