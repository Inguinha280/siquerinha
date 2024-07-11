function executarTroca() {
    let valorA = parseInt(document.getElementById('valorA').value);
    let valorB = parseInt(document.getElementById('valorB').value);
    let formData = new FormData();
    formData.append('valorA', valorA);
    formData.append('valorB', valorB);
    fetch('troca_valores.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('resultado').textContent = data;
    })
    .catch(error => {
        console.error('Erro na requisição AJAX:', error);
    });
}
