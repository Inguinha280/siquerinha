<?php
if (isset($_POST['base'], $_POST['altura'])) {
    $base = $_POST['base'];
    $altura = $_POST['altura'];
    function areaQuadrado($base, $altura) {
        $area = $base * $altura;
        return $area;
    }
    $area = areaQuadrado($base, $altura);
    $resultado_formatado = number_format($area, 3, '.', '');
    echo "A área do quadrado é $resultado_formatado";
} else {
    echo "Erro: Valores não recebidos corretamente.";
}
?>
