function converteFahrenheitParaCelsius(fahrenheit) {
    var celsius = (5/9) * (fahrenheit - 32);
    return celsius;
}
document.getElementById("converterForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    if (!isNaN(fahrenheit)) {
        var celsius = converteFahrenheitParaCelsius(fahrenheit);
        document.getElementById("resultado").innerText = fahrenheit + "F eh equivalente a " + celsius.toFixed(2) + "C";
    } else {
        document.getElementById("resultado").innerText = "Por favor, insira um valor numérico válido.";
    }
});
