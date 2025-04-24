function mostrarFeedback() {
    let valorFeedback = document.getElementById('feedback').value;

    if (valorFeedback) {
        alert(valorFeedback);
    } else {
        alert("O campo está vazio.");
    }
}
document.getElementById('send').addEventListener('click', mostrarFeedback);

let botaoAtivo = null;

function alterarEstado(botaoClicado, outroBotao) {
    // Se já houver um botão ativo, redefine para permitir novos cliques
    if (botaoAtivo === botaoClicado) {
        botaoClicado.style.backgroundColor = "";
        outroBotao.style.backgroundColor = "";
        outroBotao.disabled = false;
        botaoAtivo = null; // Resetamos o estado ativo
    } else {
        botaoClicado.style.backgroundColor = "pink"; // Botão clicado fica rosa
        outroBotao.style.backgroundColor = "gray"; // Outro botão fica cinza
        outroBotao.disabled = true; // Desativa o outro botão
        botaoAtivo = botaoClicado; // Define o botão ativo
    }
}

document.getElementById("happy").addEventListener("click", function() {
    alterarEstado(this, document.getElementById("sad"));
});

document.getElementById("sad").addEventListener("click", function() {
    alterarEstado(this, document.getElementById("happy"));
});








