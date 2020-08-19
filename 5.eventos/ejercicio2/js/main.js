'use strict';

document.querySelector('.red1').addEventListener('click', () => {
    let nombre = document.querySelector('input').value;
    alert(`Hola, ${nombre} :)`);
    console.log(`Hola, ${nombre} :)`);
})