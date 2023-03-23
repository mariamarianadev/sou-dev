const express = require('express');
const categoria = require('./produto');

//criando um router para gerenciar os endpoints de categoria
const app = express.Router();

app.get('/produtos', (req, res)=>{
    res.send(produto.buscar());
});

app.post('/produtos', (req, res)=>{
    res.send(produto.cadastrar());
});


//exportando todas as rotas criadas aqui
module.exports = app; 