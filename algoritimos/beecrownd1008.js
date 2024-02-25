// impotações do projeto
let input = require("fs").readFileSync("entrada.txt", "utf8");
let lines = input.split("\n");

let codigo = Number(lines.shift());
let horasTrabalhadas = Number(lines.shift());
let valorHora = Number(lines.shift());

let salario = horasTrabalhadas * valorHora;

console.log(`NUMBER = ${codigo}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
