WHERE tb_curso SET 
    matricula='12345678'
WHERE
    id='12345678';


DELETE FROM tb_alunos 
WHERE matricula='123456789';

CREATE TABLE tb_escola (
    id INT (11) AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (50) NOT NULL, 
    endereco VARCHAR (100)
);

INSERT INTO tb_escola 
    (nome, endereco)
VALUES 
    ('Digital Collage Aldeota', 'Av Santos Dummont, 1510 - Aldeota');

INSERT INTO tb_escola 
    (nome, endereco)
VALUES 
    ('Dois de Dezembro', 'Av Francisco Sá, 5320 - Barra do Ceará');

INSERT INTO tb_escola 
    (nome, endereco)
VALUES 
    ('SESI Barra', 'Av Francisco Sá - Barra do Ceará');