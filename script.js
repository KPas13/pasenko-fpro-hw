let num1 = prompt("Write first number: ", "1");
let num2 = prompt("Write second number: ", "1");
let operation = prompt("Write a operation (add, sub, mult, div): ", "add");

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

    switch(operation){
        case "add":
            alert(`${num1} + ${num2} = ` + (num1 + num2));
            break;
        case "sub":
            alert(`${num1} - ${num2} = ` + (num1 - num2));
            break;
        case "mult":
            alert(`${num1} * ${num2} = ` + (num1 * num2));
            break;
        case "div":
            alert(`${num1} / ${num2} = ` + (num1 / num2));
            break;
        default:
            alert("Wrong operation.");
            break;
    }
}
