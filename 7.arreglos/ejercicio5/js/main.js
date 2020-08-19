const number = [1,2,3,4,5,6]
let acumulador1 = 0

for (let i = 0; i<number.length; i++) {
  acumulador1 += number[i];  
}

var dividir1 = acumulador1/number.length
console.log(dividir1)
