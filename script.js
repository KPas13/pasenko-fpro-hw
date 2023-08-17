let num1 = prompt("Write first number: ", "2");
let num2 = prompt("Write second number: ", "2");

num1 = Number(num1);
num2 = Number(num2);

if(String(Number(num1)) === "NaN" || String(Number(num2)) === "NaN"){
    alert("Error");
}
else{
    if(num2 === 0){
        num2 = prompt("Write another second number: ", "1");
        num2 = Number(num2);
    }

    alert(`${num1} + ${num2} = ` + (num1 + num2) +
        '\n' + `${num1} - ${num2} = ` + (num1 - num2) +
        '\n' + `${num1} * ${num2} = ` + (num1 * num2) +
        '\n' + `${num1} / ${num2} = ` + (num1 / num2));
}