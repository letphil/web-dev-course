// 1. Generate a random number between 0 and 1
const randomNum = Math.random();
console.log(randomNum);

// 2. Generate a random number between 1 and 100
const randomNum100 = Math.floor(Math.random() * 100) + 1;
console.log(randomNum100);

// 3. Find the maximum number in an array
const numbers = [10, 20, 30, 40, 50];
const maxNum = Math.max(...numbers);
console.log(maxNum);

// 4. Find the minimum number in an array
const minNum = Math.min(...numbers);
console.log(minNum);

// 5. Calculate the square root of a number
const num = 64;
const sqrtNum = Math.sqrt(num);
console.log(sqrtNum);

// 6. Calculate the power of a number (e.g., 2^3)
const base = 2;
const exponent = 3;
const power = Math.pow(base, exponent);
console.log(power);

// 7. Round a number to the nearest integer
const floatNum = 4.7;
const roundedNum = Math.round(floatNum);
console.log(roundedNum);

// 8. Round a number up to the next largest integer
const ceilNum = Math.ceil(floatNum);
console.log(ceilNum);

// 9. Round a number down to the next smallest integer
const floorNum = Math.floor(floatNum);
console.log(floorNum);

// 10. Calculate the absolute value of a number
const negativeNum = -42;
const absNum = Math.abs(negativeNum);
console.log(absNum);
