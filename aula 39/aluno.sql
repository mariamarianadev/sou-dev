CREATE TABLE tb_aluno (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL, 
    cpf CHAR (14),
    matricula CHAR (10),
    cartao_acesso CHAR (30),
    escola_id INT,
    cartao_acesso_versao INT,
    data_alteracao VARCHAR (30)
);




