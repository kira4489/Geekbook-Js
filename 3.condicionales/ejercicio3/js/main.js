var numero1= 0;
numero1 = parseInt(prompt("ingrese un numero"))

if (numero1===0) {
    console.log('El número es 0')
  } else if (numero1<0) {
    console.log('El número es negativo')
  } else if (numero1 === 12) {
    console.log('El número más 2 es mayor 13')
  } else if (numero1 > 20 && numero1 < 50) {
    console.log('El número es mayor que 20 pero menor que 50')
  } else {
    console.log('el número no es 123123125')
  }