// 1) Temos que referenciar o input
let input = document.querySelector('input[name=tarefa]');

// 2) Temos que referenciar o button
let btn = document.querySelector('#botao');

// 3) Temos que referenciar a lista
let lista = document.querySelector('#lista');

let tarefas = [
    'Jogar GTA5',
    'Estudar Python',
    'Estudar JavaScript',
    'Ver um filme',
    'Ler um livro',
];

function renderizarTarefas(){
    for(tarefa of tarefas){
        //Criar o item da lista
        let itemLista = document.createElement('li');

        // Adicionar classes no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

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

    // 3) Precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela
    tarefas.push(novaTarefa)

    //Executando a funcao para renderizar as tarefas
    renderizarTarefas();
}