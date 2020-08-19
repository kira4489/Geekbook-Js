const div = document.querySelector('.div1');
var letra1;

const changeClass = (event) => {
    letra1 = event.keyCode;

    if (letra1 == 114) {
        div.classList.add('rojo');
        div.classList.remove('morado');
    }
    else if (letra1 == 109) {
        div.classList.add('morado');
        div.classList.remove('rojo');
    }
    else if(letra1 == 118){
        div.classList.add('verde');
        div.classList.remove('rojo');
    }else if(letra1 == 107){
        div.classList.add('gris');
        div.classList.remove('rojo');
    }
}

div.addEventListener('keypress', changeClass);