// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let num = 20;
let step = 0.5;

let paragraph = document.querySelector('#numbers');
let paragraphText = '';

for(let i = 0; i < 20; i++) {
    paragraphText += (num + step).toString() + '\n';
    num += step;
}
paragraph.textContent = paragraphText;

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let oneDollar = 27;
let dollar = 10;

let dollarParagraph = document.querySelector('#dollars');
let dollarPrice = '';

for(let i = 0; i < 10; i++) {
    dollarPrice += `Price of ${dollar} = ${(dollar * oneDollar).toString()}<br>`;
    dollar += 10;
}
dollarParagraph.innerHTML = dollarPrice;

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
// let intNumber = +prompt('Enter integer: ', 1);
// let numPar = document.querySelector('#integers');
// let numText = '';
//
// for (let i = 1; i <= 100; i++) {
//     if (i * i <= intNumber) {
//         numText += i + ' ';
//     }
// }
// numPar.innerHTML = numText;

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число,
// більше 1, які не мають інших дільників крім 1 і себе).
// let intNumber2 = +prompt('Enter integer2: ', 1);
// let numPar2 = document.querySelector('#integer2');
//
// function isNumberPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
//
// if (isNumberPrime(intNumber2)) {
//     numPar2.textContent = `${intNumber2} is a prime number`;
// } else {
//     numPar2.textContent = `${intNumber2} is not a prime number`;
// }


// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let num3 = +prompt('Enter the number', '1');
let numPar3 = document.querySelector('#number3');

let logOfThree = (number) => number > 0 && Math.log10(number) / Math.log10(3) % 1 === 0;

if(logOfThree(num3)) numPar3.textContent = 'Ok';
else numPar3.textContent = 'No';
