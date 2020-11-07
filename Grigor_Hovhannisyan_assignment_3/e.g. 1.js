function sumOfDigits(num){
    let result = 0;
    while(num > 0){
        result += num % 10;
        num = Math.trunc(num / 10);
    }
    return result;
}

console.log(sumOfDigits(559812));