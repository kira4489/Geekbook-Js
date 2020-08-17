"use strict";
const firstDogImage = '<img src="https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191112123933390_COVER.jpg">';
const firstDogName = 'pecas';

const secondDogImage = '<img src="https://images.dog.ceo/breeds/terrier-fox/n02095314_2314.jpg">';
const secondDogName = 'teo';

const thirdDogImage = '<img src="https://images.dog.ceo/breeds/terrier-sealyham/n02095889_4030.jpg">';
const thirdDogName = 'Lana';

const listElement = document.querySelector('.lista');


listElement.innerHTML =
`<li>${firstDogImage} ${firstDogName}</li>
<li>${secondDogImage} ${secondDogName}</li>
<li>${thirdDogImage} ${thirdDogName}</li>`;