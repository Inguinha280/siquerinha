<?php
if (isset($_POST['numero'])) {
    $numero = $_POST['numero'];
    function ehPar($numero) {
        if ($numero % 2 == 0) {
            return "O número $numero é par.";
        } else {
            return "O número $numero é ímpar.";
        }
    }
    $resultado = ehPar($numero);
    echo $resultado;
} else {
    echo "Erro: Número não recebido corretamente.";
}
?>
