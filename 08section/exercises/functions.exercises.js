// 1. Write a function that takes two numbers and returns their sum.
function sum(a, b) {
  return a + b;
}

// 2. Write a function that takes a string and returns it reversed.
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 3. Write a function that takes an array of numbers and returns the largest number.
function findMax(arr) {
  return Math.max(...arr);
}

// 4. Write a function that takes a number and returns true if it is even, and false if it is odd.
function isEven(num) {
  return num % 2 === 0;
}

// 5. Write a function that takes an array and a value, and returns the index of the value in the array. If the value is not found, return -1.
function findIndex(arr, value) {
  return arr.indexOf(value);
}

// 6. Write a function that takes an array of strings and returns a new array with all the strings converted to uppercase.
function toUpperCaseArray(arr) {
  return arr.map((str) => str.toUpperCase());
}

// 7. Write a function that takes an array of numbers and returns a new array with all the numbers squared.
function squareNumbers(arr) {
  return arr.map((num) => num * num);
}

// 8. Write a function that takes a string and returns true if it is a palindrome, and false otherwise.
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// 9. Write a function that takes an array and returns a new array with all the duplicate values removed.
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// 10. Write a function that takes an object and returns an array of its keys.
function getObjectKeys(obj) {
  return Object.keys(obj);
}
