const BotaoConcluir = () => {
    const botaoConluir = document.createElement('button');
    botaoConluir.classList.add('check-button');
    botaoConluir.innerText = 'concluir';

    botaoConluir.addEventListener('click', concluirTarefa)
    return botaoConluir;
}

const concluirTarefa = (e) => {
    const botaoConlui = e.target; //só serve para saber no que eu estou clicando

    const tarefaCompleta = botaoConlui.parentElement; // só serve para saber o elemento pai do elemento clicado

    tarefaCompleta.classList.toggle('done'); // retorna verdadeiro ou falso, quando falso - remove, verdadeiro - adiciona uma classe
}

export default BotaoConcluir;