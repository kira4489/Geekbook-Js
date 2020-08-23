'use strict';

const paragraphs = document.querySelector('#parrafos1');
let paragraphsToAdd1 = 100;

const colors = [
    'white',
    'blue',
    'red',
    'green',
    'yellow',
    'pink'
]

//create and add paragraphs
for (let i = 1; i <= paragraphsToAdd1; i++) {
    let p_element1 = document.createElement('p');
    let p_content1 = document.createTextNode('He aprendido bien cómo funcionan los bucles');
    p_element1.appendChild(p_content1);
    paragraphs.appendChild(p_element1);
}

//create and add select to each paragraph
const createdParagraphs = document.querySelectorAll('p');
createdParagraphs.forEach(paragraph => {
    let select = document.createElement('select');

    for (const color of colors) {
        let option = document.createElement('option');
        option.appendChild(document.createTextNode(color));
        select.appendChild(option);
    };
    paragraph.appendChild(select);
    // console.log(option);
});

//add events to each select and change paragraph color
const selects = document.querySelectorAll('select');
selects.forEach((select, index) => {
    select.addEventListener('change', (ev) => {
        let colorIndex = ev.target.selectedIndex;
        createdParagraphs[index].style.color = colors[colorIndex];
    });
});