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



// CARLOS ESTEVE AQUI
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('API rodando na porta ' + port);


function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
      return val;
  }
  if (port >= 0) {
      return port;
  }
  return false;
}
//tratamento de erro ao acessar o servidor
function onError(error){
  if(error.syscall !== 'listen'){
      throw error;
  }

  const bind = typeof port === 'string' ?
  'Pipe ' + port :
  'Port ' + port;

  switch(error.code){
      case 'EACCES':
          console.error(bind + ' reque privilégios avançados');
          process.exit(1);
          break;
      case 'EADDRINUSE':
          console,error(bind + ' porta ja esta em uso');
          process.exit(1);
          break;
      default:
          throw error;
  }
}
// função de pegar informações do servidor e iniciar o debug
function onListening(){
  const addr = server.address();
  const bind = typeof addr === 'string'
      ?'pipe ' + addr
      :'port ' + addr.port;
  debug('Listening on ' + bind);
}
