function calcularArea(raio) {
    const pi = 3.14159;
    const area = pi * raio * raio;
    return area;
}
document.getElementById('areaForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const raio = parseFloat(document.getElementById('raioInput').value);
    if (raio > 0) {
        const area = calcularArea(raio);
        document.getElementById('resultado').textContent = `A área do círculo é ${area.toFixed(3)}`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, digite um valor válido para o raio.';
    }
});
