// Declaração de Constantes
const express = require('express');
const cors = require('cors');

// Definição do app utilizando o Express
const app = express();

// Definição do cors
app.use(cors());

// Utilizando o Socket.io para ouvir requisições tanto em protocolo http como em websocket
const server = require('http').Server(app);
const io = require('socket.io')(server);
io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
})

// Middleware global para o socket.io
app.use((req, res, next) => {
    req.io = io;
    return next();
});

// Aplicação pode receber body tanto em formato de json como em urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Utilizando arquivo de rotas
app.use(require('./routes'));

// Execução da Aplicação na Porta 3333 utilizando o server do socket.io
server.listen(process.env.PORT || 3333);