let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//Знайти суму та кількість позитивних елементів.
let sum = 0;
let counter = 0;

let arrPositive = arr.filter(function(a){
    return a > 0;
});

for(let i = 0; i < arrPositive.length; i++){
    counter++;
}
console.log("Counter of positive numbers: "  + counter);

arrPositive.reduce((previousValue, currentValue, currentIndex) =>
    sum = previousValue + currentValue
)
console.log("Sum of array: " + sum);

//Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = 0;
let index = 0;

arr.forEach((item, i) => {
        if(arr[i] < minElement){
            minElement = arr[i];
            index = i;
        }
    }
)

console.log("The minimal element is " + minElement);
console.log("The index of minimal element is " + index);

//Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = 0;
let maxIndex = 0;

arr.forEach((item, i) => {
        if(arr[i] > maxElement){
            maxElement = arr[i];
            maxIndex = i;
        }
    }
)

console.log("The minimal element is " + maxElement);
console.log("The index of minimal element is " + maxIndex);

//Визначити кількість негативних елементів.
let arrNegative = arr.filter(function(a){
    return a < 0;
});
let counterOfNegatives = 0;

for(let i = 0; i < arrNegative.length; i++){
    counterOfNegatives++;
}
console.log("Counter of negative numbers: "  + counterOfNegatives);

//Знайти кількість непарних позитивних елементів.
let arrUnpaired = arr.filter(function (a){
    return a > 0 && a % 2 != 0;
});
let counterUnpairedPositive = 0;
arrUnpaired.forEach((item) => {
    counterUnpairedPositive++;
});
console.log("Counter of unpaired positive numbers: " + counterUnpairedPositive);

//Знайти кількість парних позитивних елементів.
let arrPaired = arr.filter(function (a){
    return a > 0 && a % 2 === 0;
});
let counterPairedPositive = 0;
arrPaired.forEach((item) => {
    counterPairedPositive++;
});
console.log("Counter of paired negative numbers: " + counterPairedPositive);

//Знайти суму парних позитивних елементів.
let arrPaired2 = arr.filter(function (a){
    return a > 0 && a % 2 === 0;
});
let sum2 = arrPaired2.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;});

console.log("The sum of paired positive numbers is " + sum2);

//Знайти суму непарних позитивних елементів.
let arrUnpaired2 = arr.filter(function (a){
    return a > 0 && a % 2 != 0;
});
let sumUnpairedPositive = arrUnpaired2.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;});

console.log("The sum of unpaired positive numbers is " + sumUnpairedPositive);

//Знайти добуток позитивних елементів.
let positiveNumbers = arr.filter(function (a){
    return a > 0;
});
let multPositive = positiveNumbers.reduce((previousValue, currentValue) => {
    return previousValue * currentValue;
},1);

console.log("The product of positive elements is " + multPositive);

//Знайти найбільший серед елементів масиву, ост альні обнулити.
let maxIndex2 = 0;
maxIndex2 = arr.indexOf(maxElement);
for(let i = 0; i < arr.length; i++){
    if(i != maxIndex2) arr[i] = 0;
}

console.log("Array: ");
arr.forEach((item) => {
    console.log(item);
});