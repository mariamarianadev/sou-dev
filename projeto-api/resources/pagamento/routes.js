const app = require('express').Router();
const database = require('../../connection/database');

const TABLE_NAME = 'tb_pagamento';
const BASE_URL = '/pagamentos';

// pp.get("/pagamentos", async (req, res) => {
//     let dados = await database.execute(`SELECT * FROM ${TABLE_NAME}`);

//     res.send(dados);
// });

module.exports = app;
