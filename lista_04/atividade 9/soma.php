<?php
function ehBissexto($ano) {
    if (($ano % 4 == 0 && $ano % 100 != 0) || $ano % 400 == 0) {
        return true;
    } else {
        return false;
    }
}
function main() {
    $ano = readline("Digite o ano: ");
    if (ehBissexto($ano)) {
        echo "O ano $ano eh bissexto\n";
    } else {
        echo "O ano $ano nao eh bissexto\n";
    }
}
main();
?>