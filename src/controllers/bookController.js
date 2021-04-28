const Books = require('../models/book');

exports.createBook = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: 'Conteúdo não pode estar vazio' });
    return;
  }

  const book = new Books({ name: req.body.name, author: req.body.author });

  book
    .save()
    .then((data) => {
      //res.send(data);
      res.status(200).send({ message: 'salvou' });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || 'Deu merda ao salvar o livro' });
    });
};

exports.findBooks = (req, res) => {
  Books.find()
    .then((books) => {
      console.log(books);
      res.send(books);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Deu não.' });
    });
};

exports.updateBook = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: 'Conteúdo não pode estar vazio' });
    return;
  }

  const bookId = req.body._id;
  console.log(bookId);

  Books.findByIdAndUpdate(bookId, req.body)
    // book
    //   .save()
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'livro não encontrado' });
      } else {
        res.send({ message: 'Livro Alterado' });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || 'Deu merda ao alterar o livro' });
    });
};

exports.deleteBook = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: 'Conteúdo não pode estar vazio' });
    return;
  }

  const bookId = req.body._id;
  console.log(bookId);

  Books.findByIdAndDelete(bookId)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'livro não encontrado' });
      } else {
        res.send({ message: 'Livro deletado' });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: 'Nao foi possível deletar o usuário' });
    });
};
