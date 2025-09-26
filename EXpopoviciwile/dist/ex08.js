"use strict";
/**
 * Exercício 08 – Soma de array com while
 * Some os valores de um array.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let valores = [10, 20, 30, 40, 50];
let idx = 0;
let total = 0;
while (idx < valores.length) {
    total += valores[idx];
    idx++;
}
console.log(`Total = ${total}`);
//# sourceMappingURL=ex08.js.map