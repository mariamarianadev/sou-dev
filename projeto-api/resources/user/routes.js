const app = require("express").Router();
const database = require("../../connection/database");
const argon2 = require ('argon2');

app.get("/users", async (req, res) => {
    let lista = await database.execute(`
        SELECT * FROM tb_users;
    `);
    res.send(JSON.stringify(lista));
});

app.post("/users", async (req, res) => {
   //criptografando a sneha 
    let senhaCriptografada = await argon2.hash(req.body.senha);

    let response = await database.execute(`
        INSERT INTO tb_users 
        (nome, email, senha)
        VALUES
        ('${req.body.nome}','${req.body.email}','${senhaCriptografada}');
    `);

    await database.execute(`
        UPDATE tb_users 
        SET token = '${req.body.senha}_${response.insertId}'
        WHERE id = ${response.insertId};
    `);
    let dados = req.body;
    dados.id = response.insertId;
    res.send(JSON.stringify(dados));
});

app.get("/users/auth", async(req, res) => {
    let users = await database.execute(`
        SELECT * FROM tb_users 
        WHERE email = '${req.headers.email}' ;
    `);
//se nao for encontrado ninguem com email então o usuario nao existe
    if (!users[0]){
        res.status(400).send({erro:'Email invalido'}); //bad request
        return;
    }
    let senhaVerificada = await argon2.verify(users[0].senha, req.headers.senha);
    
    if (false === senhaVerificada) {
        res.status(400).send({erro:'senha invalido'});
        return;
    }


    res.send(users[0]);
});

app.delete("/users/:id", async (req, res) => {
   await database.execute(`DELETE FROM tb_banner WHERE id='${req.params.id}'`)
    
        res.sendStatus(204);
    });

module.exports = app;
