let input = require("fs").readFileSync("entrada.txt", "utf8");
let lines = input.split("\n");

let pecas1 = []
pecas1.push(lines.shift().split(' '));
let pecas2 = lines.shift();

