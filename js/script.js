// 1) Temos que referenciar o input
let input = document.querySelector('input[name=tarefa]');

// 2) Temos que referenciar o button
let btn = document.querySelector('#botao');

// 3) Temos que referenciar a lista
let lista = document.querySelector('#lista');

// card
let card = document.querySelector('.card');

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function renderizarTarefas(){

    // Limpar a listagem de itens antes de renderizar novamente a tela
    lista.innerHTML = '';

    for(tarefa of tarefas){
        //Criar o item da lista
        let itemLista = document.createElement('li');

        // Adicionar classes no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        // Adicionar evento de clique no item da Lista
        itemLista.onclick = function(){
            deletarTarefa(this);
        }

        // Criar um texto
        let itemTexto = document.createTextNode(tarefa);

        // Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        // Adicionar o item da lista na lista
        lista.appendChild(itemLista);
    }
}

// Executando a funcao para renderizar as tarefas
renderizarTarefas();

// 1) Precisamos 'escutar' o evento de clique no botao
btn.onclick = function(){
    // 2) Precisamos capturar o valor digitado pelo usuario no input
    let novaTarefa = input.value;

    if(novaTarefa !== ''){
        // 3) Precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela
        tarefas.push(novaTarefa)

        //Executando a funcao para renderizar as tarefas
        renderizarTarefas();

        // Limpart o input
        input.value = ''

        // Limpar mensagens de erro (spans)
        removerSpans();

        // Salva os novos dados no banco de dados
        salvarDadosNoStorage();
    } else {
        // Limpar mensagens de erro (spans)
        removerSpans();

        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar a tarefa!');

        span.appendChild(msg);

        card.appendChild(span);
    }

}

function removerSpans(){
    let spans = document.querySelectorAll('span');

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

function deletarTarefa(tar){
    // console.log("Parâmetro: tar", tar);
    // console.log("tar.textContent: ",tar.textContent)
    // console.log("Index de tar dentro de tarefas: ", tarefas.indexOf(tar.textContent))

    // Remove a tarefa do array
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

    // Renderiza novamente a tela
    renderizarTarefas();

    // Salva os novos dados no banco de dados
    salvarDadosNoStorage();
}

function salvarDadosNoStorage(){
    // Todo navegador web possui esta capacidade
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// console.log(tarefas)
// console.log(JSON.stringify(tarefas))