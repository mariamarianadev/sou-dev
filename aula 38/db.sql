-- Para listar os bancos de dados --
SHOW DATABASES;

-- Para criar um banco de dados -- 
CREATE DATABASE db_escola_soudiva;

-- Para excluir um banco --
DROP DATABASE nome_do_banco;

-- Para selecionar/entrar no banco de dados --
USE nome_do_banco;

-- TABELAS --

-- mostrar uma tabela--

    SHOW TABLES;

--criar uma tabela-
--varchar quer dizer que pode ter até o valor inserido no caso 50, variavel já o char é um tamanho fixo--
CREATE TABLE tb_curso(
    id INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL, 
    carga_horaria INT(4) NOT NULL, 
    descricao VARCHAR(255)
);

--- Detalhar a estrutura de uma tabela-- 

    DESC nome_da_tabela;

-- Para alterar tabela--
    ALTER TABLE nome_da_tabela;

--Para excluir uma tabela--
DROP TABLE nome_da_tabela;
