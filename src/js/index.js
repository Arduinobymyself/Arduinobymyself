/*

objetivo 1 - quando o usuário clicar no botão mostrar mais deve abrir os prjetos que estão escoondidos no html

passo 1 - pegar o botão mostrar mais no JS para ppoder verificar quando o usuário clicar nele

passo 2 - identificar o clique no botão

passo 3 - adicionar a classe ativo nos projetos escondidos


Objetivo 2 - esconder o botão de mostrar mais

passo 1 pegar o botão e esconder

*/

// objetivo 1 passo 1
const botaoMostarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


// objetivo 1 passo 2
botaoMostarProjetos.addEventListener('click', () => {
    //console.log('clicou');
    // objetivo 1 passo 3
    mostrarMaisProjetos();

    // objetivo 2 passo 1
    esconderBotao();

})





function esconderBotao() {
    botaoMostarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

