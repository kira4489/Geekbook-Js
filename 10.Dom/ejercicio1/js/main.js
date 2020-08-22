const numbers = [1, 2, 3]

for (let i = 0; i < numbers.length; i++) {
    const list = document.createElement('li');
    const content = document.createTextNode(`${numbers[i]}`);
    list.appendChild(content)

    document.querySelector('.items').appendChild(list);

}