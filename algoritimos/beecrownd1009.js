let input = require("fs").readFileSync("entrada.txt", "utf8");
let lines = input.split("\n");

let nome = lines.shift();
let salario_base = Number(lines.shift())
let vendas = Number(lines.shift())
let comissao = 0.15

let salario_total = salario_base + (vendas*comissao)

console.log(`TOTAL = R$ ${salario_total.toFixed(2)}`)