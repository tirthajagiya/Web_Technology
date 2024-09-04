const mongoose=require('mongoose');

const schema = mongoose.Schema({
    Name:String,
    Age:Number,
    Id:Number,
    City:String
});

module.exports=mongoose.model("Student",schema,"Students");