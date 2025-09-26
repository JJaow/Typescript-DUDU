"use strict";
/**
 * Exercício 13 – Conversor de Temperatura
 * F = C * 1.8 + 32
 */
Object.defineProperty(exports, "__esModule", { value: true });
function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}
// Exemplo:
let c = 25;
let f = celsiusParaFahrenheit(c);
console.log(`${c}°C equivalem a ${f.toFixed(1)}°F`);
//# sourceMappingURL=ex13.js.map