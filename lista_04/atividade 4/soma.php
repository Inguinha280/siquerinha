<?php
if (isset($_POST['valor1'], $_POST['valor2'], $_POST['valor3'])) {
    // Obtém os valores do POST
    $valor1 = $_POST['valor1'];
    $valor2 = $_POST['valor2'];
    $valor3 = $_POST['valor3'];
    function buscaMaiorValor($v1, $v2, $v3) {
        $maior = $v1;
        if ($v2 > $maior) {
            $maior = $v2;
        }
        if ($v3 > $maior) {
            $maior = $v3;
        }
        return $maior;
    }
    $maiorValor = buscaMaiorValor($valor1, $valor2, $valor3);
    echo "O maior valor informado foi $maiorValor";
} else {
    echo "Erro: Valores não recebidos corretamente.";
}
?>
