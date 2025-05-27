const fibonacci = function(num) {
    if(typeof num == "string"){
        num = +num;
    }
    if(num == 0){
        return 0;
    }
    if(num == 1 || num == 2){
        return 1;
    }
    if(num < 0){
        return "OOPS"
    }
    let num1 = 1;
    let num2 = 1;
    let nextFib = 0;
    for (let i = 3; i <= num; i++) {
        nextFib = num1 + num2;
        num1 = num2;
        num2 = nextFib;
    }
    return num2; 
};
console.log(fibonacci(2))
// Do not edit below this line
module.exports = fibonacci;
