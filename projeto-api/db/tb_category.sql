CREATE TABLE tb_category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (30),
    status INT DEFAULT 1,
    create_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_at  DATETIME NULL
);


INSERT INTO tb_category (nome) VALUES ("Bonés");

INSERT INTO tb_category (nome) VALUES ("Bonés");