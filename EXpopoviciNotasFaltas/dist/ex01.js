"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Declara o nome do aluno, suas notas e o número de faltas por matéria
const nomeAluno1 = "João";
const notaMatematica1 = 8;
const notaPortugues1 = 7;
const notaCiencias1 = 6;
const faltasMatematica1 = 3; // Faltas em Matemática
const faltasPortugues1 = 2; // Faltas em Português
const faltasCiencias1 = 6; // Faltas em Ciências
// Verifica a situação do aluno em cada matéria considerando as faltas
if (notaMatematica1 >= 7 && faltasMatematica1 <= 5) {
    console.log(`${nomeAluno1} foi aprovado em Matemática!`);
}
else if (faltasMatematica1 > 5) {
    console.log(`${nomeAluno1} foi reprovado em Matemática devido ao número de faltas.`);
}
else {
    console.log(`${nomeAluno1} foi reprovado em Matemática devido à nota.`);
}
if (notaPortugues1 >= 7 && faltasPortugues1 <= 5) {
    console.log(`${nomeAluno1} foi aprovado em Português!`);
}
else if (faltasPortugues1 > 5) {
    console.log(`${nomeAluno1} foi reprovado em Português devido ao número de faltas.`);
}
else {
    console.log(`${nomeAluno1} foi reprovado em Português devido à nota.`);
}
if (notaCiencias1 >= 7 && faltasCiencias1 <= 5) {
    console.log(`${nomeAluno1} foi aprovado em Ciências!`);
}
else if (faltasCiencias1 > 5) {
    console.log(`${nomeAluno1} foi reprovado em Ciências devido ao número de faltas.`);
}
else {
    console.log(`${nomeAluno1} foi reprovado em Ciências devido à nota.`);
}
//# sourceMappingURL=ex01.js.map