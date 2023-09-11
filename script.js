let image = document.querySelector('img');
let button = document.querySelector('button');

let numberOfImages = 9;

button.addEventListener('click', () => {
    let randomNum = Math.round(Math.random() * numberOfImages) + 1;
    image.src = `img/${randomNum}.jpg`;
});