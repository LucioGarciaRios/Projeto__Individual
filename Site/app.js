process.env.AMBIENTE_PROCESSO = "desenvolvimento";
//process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var usuarioRouter = require("./src/routes/usuarios");
var quizRouter = require("./src/routes/quiz");
var rankingRouter = require("./src/routes/ranking");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/usuarios", usuarioRouter);
app.use("/quiz", quizRouter);
app.use("/ranking", rankingRouter);

app.listen(PORTA, function () {
    console.log(
    `Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tVocê está se conectando ao banco LOCAL (MySQL Workbench)
    `);
});
