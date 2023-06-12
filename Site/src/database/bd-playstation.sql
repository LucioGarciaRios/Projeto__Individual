create database projetoIndividual;

use projetoIndividual;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
dtNascimento date,
email varchar(45),
senha varchar(45)
);


create Table contato(
	idContato INT PRIMARY KEY auto_increment,
    nome VARCHAR(45),
    email VARCHAR(45),
    assunto VARCHAR(60),
    mensagem VARCHAR(500)
);


create table quiz (
idQuiz int primary key auto_increment,
vitoria int,
pontos int,
fkUsuario int,
	 constraint fkQuizUsuario foreign key (fkUsuario) references usuario(idUsuario)
);