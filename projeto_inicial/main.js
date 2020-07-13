
import BotaoConcluir from './componentes/concluiTarefa.js';
import BotaoDeleta from './componentes/deletaTarefa.js';


const criarTarefa = (e) => {
    e.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConcluir());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);

    input.value = ' ';
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);



//Veja que, para proteger os dados e o modelo de negocio, utilizamos uma IIFE para guardarmos o nosso codigo dentro do escopo de função.
// OU podemos utilizar o sistema de modulos do ECMAscript para proteger os dados.