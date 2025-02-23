//
let listaNomes = []

function adicionarAmigo(){
    let input = document.getElementById('amigo').value;

    if (input) {
        if(!listaNomes.includes(input)) {
            listaNomes.push(input);
            atualizarListaAmigos();
            limparCampo();
        } else {
            alert('Ei, esse nome já foi adicionado!');
        }
    } else {
        alert("Por favor, insira um nome válido :(");
    }
}

    function atualizarListaAmigos() {
        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML="";
        
        for (let i = 0; i < listaNomes.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaNomes[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if(listaNomes.length > 0) {
        let sorteado = listaNomes[Math.floor(Math.random() * listaNomes.length)];
        document.getElementById('resultado').innerText = "O amigo secreto sorteado é: " + sorteado;
    } else {
        alert("Ei, adicione ao menos um amigo antes de tentar sortear!");
    }
    listaNomes = [];
    atualizarListaAmigos();
}

function limparCampo() {
    document.getElementById('amigo').value = '';
}