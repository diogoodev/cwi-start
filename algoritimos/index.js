// impotações do projeto
let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

//Entrada de dados
let valor1 = Number(lines.shift());
let valor2 = Number(lines.shift());
let valor3 = Number(lines.shift());
const peso1 = 2
const peso2 = 3
const peso3 = 5
const somaPeso = 10
// Processamento
let media = ((valor1*peso1 + valor2*peso2 + valor3*peso3)/somaPeso);

// Saida
console.log(`MEDIA = ${media.toFixed(1)}`);

