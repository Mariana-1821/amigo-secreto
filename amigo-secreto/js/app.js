
let amigos = [];

function adicionar() {
    const campoNome = document.getElementById("nome-amigo");
    const listaAmigos = document.getElementById("lista-amigos");

    const nome = campoNome.value.trim();

    if (nome === "") {
        alert("Por favor, digite o nome de um amigo!");
        return;
    }

    amigos.push(nome);

    listaAmigos.textContent = amigos.join(", ");

    campoNome.value = "";
    campoNome.focus();
}

function sortear() {
    const listaSorteio = document.getElementById("lista-sorteio");

    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio!");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    listaSorteio.textContent = amigoSorteado;
}

function reiniciar(event) {
    event.preventDefault();

    const listaAmigos = document.getElementById("lista-amigos");
    const listaSorteio = document.getElementById("lista-sorteio");
    const campoNome = document.getElementById("nome-amigo");

    amigos.length = 0;

    listaAmigos.textContent = "";
    listaSorteio.textContent = "";
    campoNome.value = "";
}