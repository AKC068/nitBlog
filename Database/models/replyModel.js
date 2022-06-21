const mongoose = require('mongoose');

const replyModel = mongoose.Schema({
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'blogs',
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comments',
  },
  replyText: {
    type: String,
  },
});

module.exports = mongoose.model('replies', replyModel);
