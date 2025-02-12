// console.log(Math.PI);
// console.log(Math.E);

// Math.round - rounds a number to the nearest integer
console.log("Math.round() -------");
console.log("Math.round(4.6)", Math.round(4.6));
console.log("Math.round(4.3)", Math.round(4.3));

// Math.floor - Rounds down to the nearest integer
console.log("Math.floor() --------");
console.log("Math.floor(4.9)", Math.floor(4.9));
console.log("Math.floor(4.1)", Math.floor(4.1));

// Math.ceil - rounds up to the nearest integer
console.log("Math.ceil() --------");
console.log("Math.ceil(4.1)", Math.ceil(4.1));
console.log("Math.ceil(4.9)", Math.ceil(4.9));

// Math.max and Math.min find the largest / smallest number
console.log("Math.max() ---------");
console.log("Math.max(10, 20, 5, 40, 30)", Math.max(10, 20, 5, 40, 30));
console.log("Math.min() ------");
console.log("Math.min(10, 20, 5, 40, 30)", Math.min(10, 20, 5, 40, 30));

const nums = [1, 2, 3, 4, 5, 10, 40, 100, 44, 30];
console.log(nums);
console.log("Math.min(...nums)", Math.min(...nums));
console.log("Math.max(...nums)", Math.max(...nums));

// Math.abs() - Gets the absolute value of a number
// converts negative numbers to positive
console.log("Math.abs() --------");
console.log("Math.abs(-10)", Math.abs(-10));
console.log("Math.abs(10)", Math.abs(10));

// Math.pow() Power of a number
console.log("Math.pow() ----------");
console.log("Math.pow(2, 3)", Math.pow(2, 3));
console.log("Math.pow(5, 2)", Math.pow(5, 2));

console.log("2 ** 3", 2 ** 3);
console.log("5 ** 2", 5 ** 2);

// Math.sqrt() -----------
console.log("Math.sqrt() ---------");
console.log("Math.sqrt(25)", Math.sqrt(25));
console.log("Math.sqrt(49)", Math.sqrt(49));

// check if a number is a perfect square
console.log("function to see if perfect square");

function isPerfectSquare(num) {
  if (Math.sqrt(num) % 1 === 0) return true;
  return false;
}

console.log("isPerfectSquare(10)", isPerfectSquare(10));
console.log("isPerfectSquare(16)", isPerfectSquare(16));
console.log("isPerfectSquare(25)", isPerfectSquare(25));
console.log("isPerfectSquare(27)", isPerfectSquare(27));
