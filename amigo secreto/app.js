let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (nome === "") {
        alert("Digite um nome válido.");
        return;
    }
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }
    
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirResultado(sorteado);
}

function exibirResultado(sorteado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `A pessoa sorteada foi: ${sorteado}`;
    listaResultado.appendChild(li);
}