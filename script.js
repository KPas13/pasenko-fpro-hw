function sumShow(){
    let sum = 0;
    function summa (number){
        sum += number;
        return sum;
    }

    return summa;
}

let sum = sumShow();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

