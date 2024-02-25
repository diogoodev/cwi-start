/* Arquivo JS aula 03 Operadores e Operacoes */
let n1 = 10  // number inteiro
let n2 = 2   // number inteiro
let n3 = "2" // string texto

document.write(`N1 ${n1} <br>`)
document.write(`N2 ${n2} <br>`)
document.write(`N3 ${n3} <br>`)

// operadores aritimeticos
console.log(n1 + n2) // adicao
console.log(n1 - n2) // subtracao
console.log(n1 * n2) // multiplicacao
console.log(n1 / n2) // divisao
console.log(n1 % n2) // resto ou modulo: Retorna o resto da divisão em números inteiros do número da esquerda pelo número da direita.

// operadores relacionais
console.log(n2 == n3)  // igual a
console.log(n2 === n3) // idêntico a, tanto o conteúdo como o tipo
console.log(n2 != n3)  // diferente de Nao=
console.log(n2 !== n3) // Nao e idêntico

// operadores de comparação
console.log(n1 > n2) // maior que
console.log(n1 < n2) // menor que
console.log(n1 >= n2) // maior ou igual a
console.log(n1 <= n2) // menor ou igual a

// operadores lógicos
let a = true
let b = false
console.log(a && b) // E   AND
console.log(a || b) // OU  OR
console.log(!a)     // NAO NOT negacao
console.log(!b) // Ele faz a inversão dos valores booleanos, ou seja, se um valor for true e você usar negação, ele se transformará em false e vice e versa.

// Operadores de incremento e decremento

contagemPalpites++;
contagemPalpites--;

// incrementar/decrementar a variável e depois retornar o valor, colocando o operador no início da variável ao invés do final.
--contagemPalpites;
++contagemPalpites;
