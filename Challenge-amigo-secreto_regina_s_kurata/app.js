//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let participantes = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    if (participantes.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    participantes.push(nome);
    input.value = ""; // Limpa o campo de entrada
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    participantes.forEach((nome) => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos dois participantes para sortear!");
        return;
    }

    let sorteados = [...participantes];
    embaralhar(sorteados);

    let resultado = {};
    for (let i = 0; i < participantes.length; i++) {
        let amigo = sorteados[i] === participantes[i] ? sorteados[(i + 1) % participantes.length] : sorteados[i];
        resultado[participantes[i]] = amigo;
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpa a lista antes de exibir os resultados

    for (let participante in resultado) {
        const item = document.createElement("li");
        item.textContent = `${participante} → ${resultado[participante]}`;
        listaResultado.appendChild(item);
    }
}