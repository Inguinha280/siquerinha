function buscarMaiorValor() {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let valor3 = document.getElementById('valor3').value;
    let formData = new FormData();
    formData.append('valor1', valor1);
    formData.append('valor2', valor2);
    formData.append('valor3', valor3);
    fetch('busca_maior.php', {
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
