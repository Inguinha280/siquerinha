<?php
function somaDoisValores($numero1, $numero2) {
    return $numero1 + $numero2;
}
if (isset($_GET['numero1']) && isset($_GET['numero2'])) {
    $numero1 = $_GET['numero1'];
    $numero2 = $_GET['numero2'];
    $resultado = somaDoisValores($numero1, $numero2);
    printf("A soma de %d e %d eh %d\n", $numero1, $numero2, $resultado);
} else {
    echo "Por favor, informe dois números inteiros via parâmetros 'numero1' e 'numero2'.";
}
?>