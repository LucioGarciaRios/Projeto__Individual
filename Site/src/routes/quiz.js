var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/computarResultado", function (req, res) {
    quizController.computarResultado(req, res);
});

router.put("/inserirFkQuiz/:jogadas/:idUsuario", function (req, res) {
    quizController.inserirFkQuiz(req, res);
});

router.get("/dadosDashboard/:idUsuario", function (req, res) {
    quizController.dashboardController(req, res);
});

router.get("/plotarGrafico/:idUsuario", function (req, res) {
    quizController.plotarGrafico(req, res);
});

module.exports = router;
