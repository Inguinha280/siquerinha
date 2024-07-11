<?php
function areaRetangulo($base, $altura) {
    $area = $base * $altura / 2;
    return $area;
}
$base = 10;
$altura = 5;
$area = areaRetangulo($base, $altura);
echo "A area do retangulo eh " . number_format($area, 3) . "\n";
?>
