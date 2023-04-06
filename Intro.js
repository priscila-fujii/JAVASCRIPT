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
//                0123456789012345
let someString = 'um "texto Comum"';
/*
console.log(someString);
// usar \ como scape, para não enrolar entre aspas.
someString = "um breve \"texto\" "; //aspDuplas dentro da outra.
console.log(someString);
someString = "no caso de usar \\ dentro, em meio ao texto, use duas.\npois uma será apagada";
console.log(someString);
*/
                   //0123456789
let anotherString = "Transcrito";/*
console.log(anotherString[4]); //-> s
console.log(anotherString[-1]); //-> undefined
console.log(anotherString.charAt(5)); //-> c
console.log(anotherString.charAt(15)); //-> 'vazio', não existe.
console.log(anotherString.concat(' ','para',' ','outro'));
*/
console.log(someString.indexOf('t')); // índice da char 't'. Ou 'texto', que começa do índice 4.
// Caso não seja encotrado nada, mostrará -1.

console.log(someString.indexOf('um', 3)); // procure 'um' depois do índice 3, caso não encontre retorne -1.
console.log(anotherString.lastIndexOf('n', 2)); //começa a busca de trás para frente, apresenta os índices da mesma forma.
// Se começar a busca de onde nem começa a charprocurada, apresenta -1.
let result = anotherString.match(/[a-z]/g);
console.log(`${typeof result},\n${result}`);
//object, [r,a,n,s,c,r,i,t,o]

result = anotherString.search(/r/); //mesma coisa que indeceOf(), mas este aceita ExRg.
console.log(`${typeof result},\n${result}`);
//number, 1

result = anotherString.replace(/r/g, '*');
console.log(`${typeof result},\n${result}`);
//string, T*ansc*ito

result = someString.slice(/*índex init*/4, /*índex final = lastIndex+1*/9);
// 0123456789012345
// um "texto Comum"
console.log(`${typeof result},\n${result}`);
//string, texto
//                      D         V         T         Q         C
//            0123456789012345678901234567890123456789012345678901
someString = 'Nova ordem mundial, o mundo está prestes a acabar...';
//result = someString.slice(5, 18);
result = someString.slice(-9, -3);
console.log(`${result}\n ${result.length}`);

anotherString = "O rato roeu a roupa do re de roma";
console.log(anotherString.split(' ', 4));
//Melhor usar o Split sem armazená-lo na variável...

/*
                Expressões Regulares
    Use a função match(), search(), replace(), slpit(), slice() e .lenght

-match() aceita expressões regulares como parâmetro.
console.log(someString.match(/[a-z]/g)); // Esta expressão retorna
um array de letras minúsculas presentes em someString.

-search() busca através de exdpressões regulares, mas retorna apenas o índice da onde começa o "resutado da busca".
result = anotherString.search(/[a-z]/g); // |.search(/[a-z]/) dá na mesma.

-replace(), de longe é a função mais interessante, "subistitui" uma, ou várias, char(s) por outra coisa.

-slice() faz o fatiamento de uma parte de toda a String, seu parâmetro e o índice.

-split() faz o fatiamento para toda a String, coloque o char específico para fatiar.

.lenght, apresenta o tamanho completo da String.
*/