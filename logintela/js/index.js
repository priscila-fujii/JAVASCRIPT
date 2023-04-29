/*--------- coisas qoe precisam ser feitas ------------
-> parar o envio do formulário; ckeck.
->pegar os inputs do fumulario
-

const divResult = document.querySelecto(#divtagID);
const p = document.createElement('p');  cria uma variável do elemento p
p.innerHTML = 'Um texto';   se der print vai aparecer tentre tags p
divResult.appendChild(p);   insere a <p>Um texto</p> entre tags da div*
*/

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit'/*evento que é escutado*/, function/*função anônima */(event/* Evento*/) {
    event.preventDefault();
    //console.log('Evento previnido, o fomulário foi barrado');
    setResultado('');
    /*---- poderia ser Assim, mas resolveu usar o objeto event ----
    const altura = document.querySelector('#inpAlt');
    const peso = document.querySelector('#inpPeso');
    */
   // **** Dentre desta finção anônima se der um return, o código se encerrará *********
    const getAltura = event.target.querySelector('#inpAlt');
    const getPeso = event.target.querySelector('#inpPeso');//pega diretamente do evento click uo submit, é mais prático

    const alt = Number(getAltura.value);
    const pso = Number(getPeso.value);
    //Se caso o input form texto, então Number() retornará um NaN, e issp precisa ser testado.
    if(!alt || !pso){
        setResultado('Altura ou peso inválido, tente novamente...', false);
        return
    }//esse return para esta função.
    const imcResutl = getIMC(alt, pso);
    const nivelIMC = getNivelIMC(imcResutl);
    setResultado(`Seu imc é ${imcResutl} e está no nível de ${nivelIMC}`, true);
    //console.log(nivelIMC, imcResutl);
});

//calcula o imc
function getIMC(a, p){
    const imc = p / a**2;
    return imc.toFixed(2);
}

// o professor sugeriu criar uma funçãozinhapara cada coisa
function criaP(){
    const p = document.createElement('p');
    //p.classList.add('para-result');
    //p.innerHTML = 'Tu es Bem Pesado!';
    return p;
}
/* função para criar parágrafos, para fazer cálculos, etc.*/

function setResultado(msg, isValid) { // Se isValid for false, s tag<p> será velmelha.
    const result = document.querySelector('#imcResult');
    result.innerHTML = '';
    const p = criaP();
    if(isValid) { p.classList.add('para-result'); }
    else{ p.classList.add('non'); }
    p.innerHTML = msg;
    result.appendChild(p);
}

//---- Tabelinha do imc ----
function getNivelIMC(imcResutl){
                    // 0            1           2           3               4                       5
    const nivelIMC = ['MAGREZA', 'NORMAL', 'SOBREPESO', 'OBESIDADE (I)', 'OBESIDADE MÉDIA (II)', 'OBESIDADE GRAVE (III)'];
    /*
            MENOR QUE 18,5	MAGREZA	0
            ENTRE 18,5 E 24,9	NORMAL	0
            ENTRE 25,0 E 29,9	SOBREPESO	I
            ENTRE 30,0 E 39,9	OBESIDADE	II
            MAIOR QUE 40,0  OBESIDADE GRAVE III
    */
   if(imcResutl >= 39.9) return nivelIMC[5];
   if(imcResutl >= 34.9) return nivelIMC[4];
   if(imcResutl >= 29.9) return nivelIMC[3];
   if(imcResutl >= 24.9) return nivelIMC[2];
   if(imcResutl >= 18.5) return nivelIMC[1];
   if(imcResutl < 18.5) return nivelIMC[0];
}


