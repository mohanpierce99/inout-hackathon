 var express=require('express');
var app=express();
var ip = require('ip');

var onFileChange = require("on-file-change");

app.use(express.static("./public"));


app.get("/hello",(req,res)=>{
onFileChange("file.txt", function()
{
    console.log("File changed!");
});

})

console.log(ip.address())
app.listen(3000,ip.address());
