const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectToDatabase = () => {
  try {
    mongoose.connect('mongodb+srv://blogadmin:apnablog@cluster0.jb1ub.mongodb.net/blogdb?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      },
      () => {
        console.log('Database connected successfully');
      }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectToDatabase;
