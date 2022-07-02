const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("index");
});

app.get("/login",function(req,res){
  res.render("login");
});

app.get("/signup",function(req,res){
  res.render("signup");
});

// app.get("/",function(req,res){
//   res.sendFile(__dirname+"/index.html");
// });

app.listen(3000,function(){
  console.log("server started at port 3000");
});
