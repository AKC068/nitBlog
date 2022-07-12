const express       = require("express"),
      app           = express(),
      bodyParser    = require("body-parser"),
      mongoose      = require("mongoose"),
      passport      = require("passport"),
      LocalStrategy = require("passport-local"),
      User          = require("./models/userModel.js"),
      Blog          = require("./models/blogModel.js");

const homeRouter = require("./routes/index.js"),
      authRouter = require("./routes/auth.js");

const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Error connecting MongoDB: " + err));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// ==================================================
//          PASSPORT CONFIGURATION
// ==================================================

app.use(
  require("express-session")({
    secret: "a blog, for the students and by the students",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// =================================================

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

app.use("/", homeRouter);
app.use("/", authRouter);

// ==============================================

const PORT = 3000;
app.listen(PORT, function () {
  console.log("Server started at port " + PORT);
});