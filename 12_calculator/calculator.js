const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((acc, sum) => acc + sum, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, sum) => acc * sum, 1);
};

const power = function(num1, num2) {
	let pwr = 0;
  for (let i = 1; i < num2; i++) {
    if(pwr == 0){
      pwr += num1 * num1 
    }else {
      pwr = pwr * num1 
    }  
    
  }
  return pwr;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
	let pwr = 1;
  for (let i = num; i > 0; i--) {
    pwr*= i
  }
  return pwr;
};
console.log(factorial(5));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
