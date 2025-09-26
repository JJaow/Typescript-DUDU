"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo 7: Mais um exemplo de Função Matemática
function calcularFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calcularFatorial(n - 1);
}
console.log("Fatorial de 5:", calcularFatorial(5));
console.log("Fatorial de 7:", calcularFatorial(7));
//# sourceMappingURL=ex07.js.map