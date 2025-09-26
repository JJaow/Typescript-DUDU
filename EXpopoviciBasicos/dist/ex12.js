"use strict";
/**
 * Exercício 12 – Juros Compostos
 * Valor Final = Capital * (1 + Taxa) ^ Tempo
 * Taxa em decimal (ex.: 5% = 0.05).
 */
Object.defineProperty(exports, "__esModule", { value: true });
function jurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow(1 + taxa, tempo);
}
// Exemplo:
let capitalC = 1000;
let taxaC = 0.05;
let tempoC = 12;
let vfCompostos = jurosCompostos(capitalC, taxaC, tempoC);
console.log(`Juros compostos -> VF: R$ ${vfCompostos.toFixed(2)}`);
//# sourceMappingURL=ex12.js.map