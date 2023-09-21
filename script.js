let str1 = prompt('Enter the string: ', ' ');
let str2 = prompt('Enter the string: ', ' ');
let str3 = prompt('Enter the string: ', ' ');

alert(str1 + ' ' + str2 + ' ' +str3);

let number = +prompt('Enter the five-digit number: ', 12345);
if(number.length > 5) {
    number = prompt('Enter the five-digit number: ', 12345);
} else {
    let array = [];
    for(let i = 0; i < 5; i++) {
        let num = number % 10;
        array.push(num);
        number = Math.floor(number / 10);
    }
    let reverseArray = array.reverse().join(' ');
    alert(`Numbers: ${reverseArray}`);

}





