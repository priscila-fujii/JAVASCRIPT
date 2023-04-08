//  exercícions da aula 13
/*
const nome = prompt('Digite aqui o seu nome:');
document.body.innerHTML = `O seu nome é <strong>${nome}</strong><br />`;
document.body.innerHTML += `O seu nome tem ${nome.length} letras<br />`;
document.body.innerHTML += `Asegunda letra do seu nome é ${nome[1]}<br />`;
document.body.innerHTML += `O primeiro índice da letra '<strong>a</strong>' no seu nome é ${nome.indexOf('a')}<br />`;
document.body.innerHTML += `O último índice da letra '<strong>a</strong>' no seu nome é ${nome.indexOf('a')}<br />`;
document.body.innerHTML += `Três últimas letras do seu nome: ${nome.slice(-3, nome.length)}<br />`;
document.body.innerHTML += `Em letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Em letras minúsculas: ${nome.toLowerCase()}<br />`;
document.body.innerHTML += `As letras do seu nome são: ${nome.split(' ')}<br />`;
===================================================================================
*/

// Aula 14: mais sobre numbers
/*
let [num1, num2] = [12, 6.345879];
console.log(`12 em binário é: ${num1.toString(2)}`);
console.log(`Arredondamento de casas decimais ${num2} -> ${num2.toFixed(2)}`);
console.log(`12 é inteiro? ${Number.isInteger(num1)}\n6.345879 é inteiro? ${Number.isInteger(num2)}`);
let varTemp = num1 * 'qualquer coisa';
console.log(`num * 'str' = ${varTemp}\thuuunnnn?\nEntão, vartemp é Not a Number(NaN)? ${Number.isNaN(varTemp)}`);

// -----------  Imprecisão do Number float  -------------------------
let num1 = 0.203;
let num2 = 1.807;
let num3;

console.log(`${num1 + num2}\t${Number.isInteger(num1 + num2)}`);
//........ oh, talvez as atualizações recentes não mostrem as casas desnecessárias.
// isso, até encontrar número > zero pós-vírgula. dai sim, isInteger responde falso.
*/