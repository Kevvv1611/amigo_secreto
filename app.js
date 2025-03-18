// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre");
    }

    amigos.push(nombreAmigo);
    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();

};

function actualizarLista() {
    const listaAmigoU1 = document.getElementById("listaAmigos");
    listaAmigoU1.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoU1.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos, agregar amigos");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random()*amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoU1 = document.getElementById("resultado");
    resultadoU1.innerHTML = `<li>${amigoSorteado}</li>`;
}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click", sortearAmigoAmigo);
});