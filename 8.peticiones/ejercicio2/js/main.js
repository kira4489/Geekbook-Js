let chichacha = () => {
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data=> {
    const img = document.querySelector('img');
    img.src= data.message;
    img.alt='chihuahua'
});
}

document.getElementById('btn1').addEventListener('click',chichacha);
