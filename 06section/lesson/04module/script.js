// function greet() {
//   console.log("HELLO, welcome to javascript");
// }

// greet(); // calling the function

// function greetUser(name) {
//   console.log(`Hello, ${name}!`);
// }

// greetUser("Alice");
// greetUser("Bob");
// greetUser("Charles");

// function addNumbers(num1, num2, num3) {
//   console.log(`Sum: ${num1 + num2 + num3}`);
// }

// addNumbers(1, 2, 3); // Output: 6
// // addNumbers(5, 10); // Output: 15
// // addNumbers(10, 10); // Output : 20

// function multiply(x, y) {
//   return x * y;
// }

// console.log(multiply);

// const result = multiply(4, 5);
// console.log(result);

// const greet = function (name) {
//   return `Hello, ${name}`;
// };

// console.log(greet);

// Arrow Functions ( Shorter Syntax )

// const square = (num) => num ** 2;
// console.log(square(5)); // Output: 25

// () => {}
// const multiply = (a, b) => {
//   a * b;
// };

// console.log(multiply(3, 4)); // Output : 12

// Function Scope and Hoisting

// let globalVar = "I am global";

// function testScope() {
//   let localVar = "I exists only in this function";
//   console.log(globalVar); // works
//   console.log(localVar); // works
// }

// testScope();
// console.log(globalVar); // Works
// console.log(localVar); // Error;

// hello();

// function hello() {
//   console.log("Hello from a function declaration");
// }

// greet();

// const greet = function () {
//   console.log("HELLO FROM A FUNCTION EXPRESSION");
// };
