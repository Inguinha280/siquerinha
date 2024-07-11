function calcularArea() {
    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value;
    if (base <= 0 || altura <= 0) {
        alert("Os valores de base e altura devem ser números positivos.");
        return;
    }
    let area = (base * altura) / 2;
    let resultadoFormatado = `A área do retângulo é ${area.toFixed(3)}`;
    document.getElementById('resultado').innerText = resultadoFormatado;
}
