let numbers = [];

for(let i = 0; i < 3; i++) {
    numbers.push(+prompt('Enter the third number', 1));
}
function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let sum = sumArr(numbers);

function averageNum(sum, arr) {
    let average = 0;
    average = (sum / arr.length).toFixed(1);
    alert(`The average is ${average}`);
}

averageNum(sum, numbers);
