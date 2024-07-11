function calcularArea() {
    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value;
    let formData = new FormData();
    formData.append('base', base);
    formData.append('altura', altura);
    fetch('calcula_area_quadrado.php', {
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
