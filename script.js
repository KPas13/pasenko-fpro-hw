let prevBtn = document.querySelector('#prev-button');
let nextBtn = document.querySelector('#next-button');
let image = document.querySelector('#image');

let count = 1;
image.src = 'img/1.jpg';

prevBtn.addEventListener('click', () => {
    count--;
    if (count === 1) {
        image.src = 'img/1.jpg';
        prevBtn.style.visibility = 'hidden';
    } else if (count === 0) {
        count = 1;
        image.src = 'img/1.jpg';
        prevBtn.style.visibility = 'hidden';
    } else {
        prevBtn.style.visibility = 'visible';
    }
    nextBtn.style.visibility = 'visible';
    image.src = `img/${count}.jpg`;
});

nextBtn.addEventListener('click', () => {
    prevBtn.style.visibility = 'visible';
    count++;
    if(count === 9){
        nextBtn.style.visibility = 'hidden';
    }
    image.src = `img/${count}.jpg`;
});

