'use strict'; 
const constante1='http://placehold.it/300x300';
var variable1='';
const redElement = document.querySelector('.prueba');

variable1=prompt('ingrese la url');

if (variable1 !='http://www.fillmurray.com/300/300'){
    variable1=constante1;
    redElement.innerHTML=` 
    <img src="${variable1}" alt="">`;
}
else if(variable1=='http://www.fillmurray.com/300/300'){

    redElement.innerHTML=` 
    <img src="${variable1}" alt="">`;
}