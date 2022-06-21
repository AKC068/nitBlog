const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  confirmationCode: String,
  resetToken: String,
  resetTokenExpire: Date,
  blog: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'blogs',
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('users', userSchema);
module.exports = User;
