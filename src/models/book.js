const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: 'string', required: true },
  author: { type: 'string', required: true },
});

const Books = mongoose.model('book', schema);

module.exports = Books;
