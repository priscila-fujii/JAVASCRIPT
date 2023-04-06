// Faça a troca das  variáveis
let varA = 'A'; //->B
let varB = 'B'; //->C
let varC = 'C'; //->A
/* converta em:
varA == B, varB == C, varC == A . poede cria vaiável auxiliar.
var aux = '';       //Minha solução!
aux = varA;
varA = varB;
varB = aux;
//varA =='B', varB =='A'

var aux = '';
aux = varC;
varC = varB;
varB = aux;
//varB =='C', varC =='A'
console.log(`variável A: ${varA}\nvariável B: ${varB}\nvariável C: ${varC}`)


//    Solução inovadora:
[varA, varB, varC] = [varB, varC, varA];
// Atribuição por índice. UAU.
console.log(`variável A: ${varA}\nvariável B: ${varB}\nvariável C: ${varC}`);
*/
// ----------- mais Strings --------------------
let someString = 'um "texto Comum"';
console.log(someString);
// usar \ como scape, para não enrolar entre aspas.
someString = "um breve \"texto\" "; //aspDuplas dentro da outra.
console.log(someString);
someString = "no caso de usar \\ dentro, em meio ao texto, use duas.\npois uma será apagada";
console.log(someString);
                   //0123456789
let anotherString = "Transcrito";
console.log(anotherString[4]); //-> s
console.log(anotherString[-1]); //-> undefined
console.log(anotherString.charAt(5)); //-> c
console.log(anotherString.charAt(15)); //-> 'vazio', não existe.
console.log(anotherString.concat(' ','para',' ','outro'));