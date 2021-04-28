const express = require('express');
const connectDB = require('./src/database/connection');
const bookController = require('./src/controllers/bookController');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('Ta rodando');
});

connectDB();

const books = [
  { name: 'e o vento levou' },
  { name: 'hARRY POTER' },
  { name: 'e o vento levou' },
  { name: 'e o vento levou' },
];
app.get('/', (req, res) => {
  res.json(books);
});

app.post('/books', bookController.createBook);
app.get('/books', bookController.findBooks);
app.put('/books', bookController.updateBook);
app.delete('/books', bookController.deleteBook);
