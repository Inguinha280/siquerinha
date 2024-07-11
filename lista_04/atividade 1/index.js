function somaDoisValores(numero1, numero2) {
    return numero1 + numero2;
}
function calcularSoma() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    if (!isNaN(numero1) && !isNaN(numero2)) {
        let resultado = somaDoisValores(numero1, numero2);
        document.getElementById('resultado').textContent = `A soma de ${numero1} e ${numero2} é ${resultado}`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, informe dois números inteiros válidos.';
    }
}