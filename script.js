function numberDegree(num, degree){
    if(degree === 1) return num;
    else return num * numberDegree(num, degree - 1);
}
console.log(numberDegree(2, 3));