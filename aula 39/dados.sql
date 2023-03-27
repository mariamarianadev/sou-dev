-- Para buscar os dados de uma tabela --
-- Seleciona todas as colunas de todas as linhas/tuplas --
SELECT * FROM tb_curso;

-- Para inserir dados em uma tabela --
INSERT INTO tb_curso 
    (nome, carga_horaria, descricao)
VALUES 
    ('valor 1', 'valor 2', 'valor 3');

-- Para editar os dados de uma tabela --
UPDATE tb_curso SET
coluna1='valor1'; 

-- Para excluir dados de uma tabela --
DELETE FROM tb_curso;

--contar dados da coluna
SELECT COUNT (*) FROM tb_aluno;

-- adicionar coluna
ALTER TABLE tb_aluno
ADD COLUMN ;

-- alterar nome da coluna
ALTER TABLE tb_aluno
RENAME COLUMN cartao_versao TO cartao_acesso_versao;

-- colocar numero id do curso no id do aluno.
 UPDATE tb_aluno SET cursos_id = 1  WHERE id = 2;

-- mostrar alterações 
 UPDATE tb_aluno SET cursos_id = 1 WHERE id = 1;

