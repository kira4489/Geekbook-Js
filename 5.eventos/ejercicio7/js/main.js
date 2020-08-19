'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';


document.querySelector('button').addEventListener('click', () => {
    document.querySelector('body').innerHTML += /*html*/`
    <ul>
        <li class="inception">${inception}</li>
        <li class="theButterFlyEffect">${theButterFlyEffect}</li>
        <li class="eternalSunshineOfTheSM">${eternalSunshineOfTheSM}</li>
        <li class="blueVelvet">${blueVelvet}</li>
        <li class="split">${split}</li>
    </ul>`;

    document.querySelector('ul').addEventListener('click', (evento) => console.log(evento.target.innerText));
});