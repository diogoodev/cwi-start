// impotações do projeto
let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

//Entrada de dados

let valor1 = Number(lines.shift());
let valor2 = Number(lines.shift());
let valor3 = Number(lines.shift());
let valor4 = Number(lines.shift());

// Processamento
let diferença = ((valor1 * valor2) - (valor3 * valor4));

// Saida
console.log(`DIFERENÇA = ${diferença}`);

