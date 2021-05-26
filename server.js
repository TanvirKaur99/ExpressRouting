var express=require('express');
var obj=express();//here "express()" is inbuilt function and function is stored in variable "obj"
obj.get('/',(req,res)=>{
    res.sendFile(__dirname+"/navbar.html")
});
obj.get('/login',(req,res)=>{
    res.sendFile(__dirname+"/login.html")
});

obj.get('/admin',(req,res)=>{
    res.sendFile(__dirname+"/admin.html")
});

obj.get('/user',(req,res)=>{
    res.sendFile(__dirname+"/user.html")
});

obj.listen(4000);