<?php
function areaCirculo($raio) {
    $pi = 3.14159;
    $area = $pi * pow($raio, 2);
    return $area;
}
function main() {
    $raio = 10; 
    $area = areaCirculo($raio);
    printf("A area do circulo eh %.3f", $area);
}
main();
?>
