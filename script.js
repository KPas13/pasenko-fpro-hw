// Task 1

// function averageNumber(arr){
//     let sum = 0;
//     let result = 0;
//     let countNums = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(typeof(arr[i]) === 'number'){
//             sum += arr[i];
//             countNums++;
//         }
//     }
//     console.log(sum);
//     result = sum / countNums;
//     console.log(result);
// }
//
// let arr = ['hello', 9, true, 1];
//
// averageNumber(arr);



// Task 2

// let x = +prompt("Enter first number", "1");
// let y = +prompt("Enter second number", "1");
// while(String(Number(x)) === "NaN" || String(Number(y)) === "NaN"){
//     x = +prompt("Reenter first number", "1");
//     y = +prompt("Reenter second number", "1");
// }
//
// let znak = prompt("Enter znak (+, -, *, /, %, ^): ", "+");
//
// function doMath(x, znak, y){
//     if(y === 0 && znak === '/'){
//         y = +prompt("Reenter second number", "1");
//     }
//     switch (znak){
//         case "+":
//             alert(`${x} + ${y} = ` + (x + y));
//             break;
//         case "-":
//             alert(`${x} - ${y} = ` + (x - y));
//             break;
//         case "*":
//             alert(`${x} * ${y} = ` + (x * y));
//             break;
//         case "/":
//             alert(`${x} / ${y} = ` + (x / y));
//             break;
//         case "%":
//             alert(`${x} % ${y} = ` + (x % y));
//             break;
//         case "^":
//             alert(`${x} ^ ${y} = ` + (Math.pow(x, y)));
//             break;
//         default:
//             "Done";
//             break;
//     }
// }
//
// doMath(x,znak,y);



// Task 3

// let row = +prompt("Enter the amount of rows: ", "1");
// let column = +prompt("Enter the amount of columns: ", "1");
//
// function fillUserData() {
//     let arr = [];
//     for (let i = 0; i < column; i++) {
//         arr[i] = [];
//         for (let j = 0; j < row; j++) {
//             arr[i].push(prompt(`Enter element: `));
//         }
//     }
//
//     return arr;
// }
//
// console.log(fillUserData());


// Task 4

// function delSymbols(str, replaceSymbols) {
//     const regexp = new RegExp(replaceSymbols.join('|'), 'g');
//     const replaceString = str.replaceAll(regexp, '');
//     console.log(replaceString);
// }
//
// delSymbols("hello world", ['l', 'd']); // "heo wor"

