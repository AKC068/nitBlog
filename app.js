const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const Signup = require("./models/signupModel.js");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Error connecting MongoDB: " + err));

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

app.post("/signup", function (req, res) {
  const newUser = new Signup({
    fname: req.body.fname,
    mname: req.body.mname,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log(newUser);
      res.redirect("/");
    }
  });
});

// app.get("/",function(req,res){
//   res.sendFile(__dirname+"/index.html");
// });

// mongoose.connection.on("disconnected", () => {
//     console.log("mongoDb disconnected!");
//   });

const PORT = 3000;
app.listen(PORT, function () {
  console.log("Server started at port " + PORT);
});
