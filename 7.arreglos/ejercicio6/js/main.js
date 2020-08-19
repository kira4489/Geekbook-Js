const enviar = document.querySelector('.submit')
const option1 = document.querySelector('.option1')
const option2 = document.querySelector('.option2')


// console.log(movies)

function guardar(){
  let movies = [option1.value, option2.value]
  return (movies)
}

enviar.addEventListener(('click'), guardar)
