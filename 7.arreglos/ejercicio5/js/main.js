const number = [1,2,3,4,5,6]
let acumulador = 0

for (let i = 0; i<number.length; i++) {
  acumulador += number[i];  
}

var dividir = acumulador/number.length
console.log(dividir)
