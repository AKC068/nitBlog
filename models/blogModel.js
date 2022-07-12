const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  blogtitle: {
    type: String,
    required: true,
  },
  blogbody: {
    type: String,
    required: true,
  },
  user_name: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    fname: String,
    lname: String,
  }
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
