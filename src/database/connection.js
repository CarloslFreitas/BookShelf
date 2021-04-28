const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:api@cluster0.o6j5f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
console.log('Conectou');

module.exports = connectDB;
