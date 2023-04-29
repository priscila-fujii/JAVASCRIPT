const document = window.document;

const divClassParagrafos = document.querySelector('.paragrafos');
// Pegou tuda a estrutura <div>

const paragrafos = divClassParagrafos.querySelectorAll('p');
// pegou a estrutura <div> e selecionou somente os paragrafos.

const styleBody = getComputedStyle(document.body);
// criou uma variável com capacidade de manipular o estulo do <body>

const backgrondColorOfBody = styleBody.backgroundColor;
// atribui a funcionalidade de manipular a cor para outra variável.
for (let p of paragrafos){
    p.style.backgroundColor = backgrondColorOfBody;
}