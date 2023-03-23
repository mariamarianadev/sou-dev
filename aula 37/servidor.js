const express = require('express');

const categoriaRouter = require('./controllers/categoria/router');
const produtoRouter = require('./controllers/produto/router');
const clienteRouter = require('./controllers/cliente/router');


//iniciando uma aplicacao com express
const app = express();

//colocando o express para usar o router da categoria
app.use(categoriaRouter);
app.use(produtoRouter);
app.use(clienteRouter);

const PORTA = 8000;

app.listen(PORTA, () => {
    console.log('-------------');
    console.log('----TA ON---');
    console.log('------------');
});