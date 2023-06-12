var database = require("../database/config");

function computarResultado(vitoria, pontos, fkUsuario) {
    var instrucao = `
        INSERT INTO quiz (vitoria, pontos, fkUsuario) VALUES (${vitoria}, ${pontos}, ${fkUsuario});
    `;
    return database.executar(instrucao);
}

function inserirFkQuiz(jogadas, idUsuario) {
    var instrucao = `
        UPDATE quiz SET vitorias = ${jogadas} WHERE idUsuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}

function pegarPontos(fkUsuario){
    var instrucao = `
    SELECT pontos FROM quiz WHERE fkUsuario = ${fkUsuario} ORDER BY idQuiz DESC LIMIT 1;
`;
return database.executar(instrucao);

}


function plotarGrafico(fkUsuario){
    var instrucao = `
    SELECT pontos FROM quiz WHERE fkUsuario = ${fkUsuario} LIMIT 1;
`;
return database.executar(instrucao);

}


// function pegarDados(fkUsuario){
//     var instrucao = `
//     SELECT pontos FROM quiz WHERE fkUsuario = ${fkUsuario} GROUP BY pontos;
// `;
// return database.executar(instrucao);

// }

module.exports = {
    computarResultado,
    inserirFkQuiz,
    pegarPontos,
    plotarGrafico
}
