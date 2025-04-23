function mostrarFeedback() {
    let valorFeedback = document.getElementById('feedback').value;

    if (valorFeedback) {
        alert(valorFeedback);
    } else {
        alert("O campo está vazio.");
    }
}
document.getElementById('send').addEventListener('click', mostrarFeedback);