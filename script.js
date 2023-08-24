let arrayLength = +prompt("Enter the length of array: ", 0);

let arr = [];

for(let i = 0; i < arrayLength; i++){
    let nums = prompt("Enter the number: ", 0);
    arr.push(nums);
}

console.log("Array: ");
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

function compareNumbers(num1, num2){
    if(num1 > num2) return 1;
    else if(num1 == num2) return 0;
    else return -1;
}

arr.sort(compareNumbers);

console.log("Sort array: ");
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log("Array with delete numbers from 2 to 4: ");

arr.splice(1, 3);
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


