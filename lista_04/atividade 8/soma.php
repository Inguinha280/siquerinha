<?php
function converteFahrenheitParaCelsius($fahrenheit) {
    $celsius = ($fahrenheit - 32) * 5 / 9;
    return $celsius;
}
function main() {
    $temperaturaFahrenheit = 100;
    $temperaturaCelsius = converteFahrenheitParaCelsius($temperaturaFahrenheit);
    printf("%d°F eh equivalente a %.2f°C\n", $temperaturaFahrenheit, $temperaturaCelsius);
}
main();
?>
