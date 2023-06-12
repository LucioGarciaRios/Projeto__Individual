var quizModel = require("../models/quizModel");

function computarResultado(req, res) {
    var vitoria = req.body.vitoria;
    var pontos = req.body.pontos;
    var fkUsuario = req.body.fkUsuario;

    console.log("Dados recebidos:", vitoria, pontos, fkUsuario);

    if (vitoria == undefined) {
        console.log("A vitória está undefined!");
        res.status(400).send("A vitória está undefined!");
    } else if (pontos == undefined) {
        console.log("Pontos está undefined!");
        res.status(400).send("Pontos está undefined!");
    } else if (fkUsuario == undefined) {
        console.log("fkUsuario está undefined!");
        res.status(400).send("fkUsuario está undefined!");
    } else {
        quizModel.computarResultado(vitoria, pontos, fkUsuario)
            .then(function (resultado) {
                console.log("Resultado:", resultado);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao inserir a fk! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function inserirFkQuiz(req, res) {
    var jogadas = req.params.jogadas;
    var idUsuario = req.params.idUsuario;

    console.log("Dados recebidos:", jogadas, idUsuario);

    if (jogadas == undefined) {
        console.log("O jogadas está undefined!");
        res.status(400).send("O jogadas está undefined!");
    } else if (idUsuario == undefined) {
        console.log("O idUsuario está undefined!");
        res.status(400).send("O idUsuario está undefined!");
    } else {
        quizModel.inserirFkQuiz(jogadas, idUsuario)
            .then(function (resultado) {
                console.log("Resultado:", resultado);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function dashboardController(req, res){

    var fkUsuario = req.params.idUsuario;
    
    console.log('to no controller!');

    // console.log("Dados recebidos:", jogadas, idUsuario);

    if (fkUsuario == undefined) {
        console.log("A fk está undefined!");
        res.status(400).send("O jogadas está undefined!");
    } else {
        quizModel.pegarPontos(fkUsuario)
            .then(function (resultado) {
                console.log("Resultado:", resultado);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }

}

function plotarGrafico(req, res){
    var fkUsuario = req.params.idUsuario;
    
    console.log('to no controller!');

    // console.log("Dados recebidos:", jogadas, idUsuario);

    if (fkUsuario == undefined) {
        console.log("A fk está undefined!");
        res.status(400).send("O jogadas está undefined!");
    } else {
        quizModel.plotarGrafico(fkUsuario)
            .then(function (resultado) {
                console.log("Resultado:", resultado);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    computarResultado,
    inserirFkQuiz,
    dashboardController,
    plotarGrafico
}
