'use strict';
var edad = 0;
var horasVividas =0;
const diasAño = 365;
const horasDia = 24;

edad = parseInt(prompt("Ingrese su edad en numero no en letras "));

horasVividas = edad * diasAño * horasDia;

console.log(" Usted ha vivido " + horasVividas + " horas");