const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/signup", function (req, res) {
  res.render("signup");
});

// app.get("/",function(req,res){
//   res.sendFile(__dirname+"/index.html");
// });

mongoose.connection.on("disconnected", () => {
  console.log("mongoDb disconnected!");
});

app.listen(3000, function () {
  connect();
  console.log("Server started at port 3000");
});
