"use strict";

var edadPerro = 0;
edadPerro = parseInt(prompt("Ingrese la edad del perro: "));
if (edadPerro === 1) {
    console.log('El perro tiene 15 años humanos');
} else if (edadPerro === 2) {
    console.log('El perro tiene 9 años  humanos');
} else if (edadPerro > 2) {
    edadPerro = (edadPerro * 5) + 15 + 9 - 13;
    console.log("El perro tiene " + edadPerro + " años humanos");
}