function ehBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return true; 
    } else {
        return false;
    }
}
document.getElementById('anoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var ano = parseInt(document.getElementById('ano').value);
    if (ehBissexto(ano)) {
        document.getElementById('resultado').textContent = `O ano ${ano} é bissexto.`;
    } else {
        document.getElementById('resultado').textContent = `O ano ${ano} não é bissexto.`;
    }
});
