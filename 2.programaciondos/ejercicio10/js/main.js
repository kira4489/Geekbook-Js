let edad = '';
const meses = 12; 
let semanas = meses * 4; 
let dias = semanas * 7;
let horas = dias * 24;
let totalVidas = '';

edad = parseInt(prompt('ingrese su edad en numeros no en letras'));

totalVidas = edad * horas;

document.querySelector('h2').innerHTML=(`El total de horas que usted ha vivido es: ${totalVidas}`);