const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")

const UserSchema = new mongoose.Schema({
  fname: String,
  mname: String,
  lname: String,
  username: String,
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);
module.exports = User;
