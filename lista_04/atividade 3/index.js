function verificarParImpar() {
    let numero = document.getElementById('numero').value;
    let formData = new FormData();
    formData.append('numero', numero);
    fetch('verifica_par_impar.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('resultado').innerHTML = data;
    })
    .catch(error => {
        console.error('Erro na requisição AJAX:', error);
    });
}
