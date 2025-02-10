// Exercise 1: Identify the data type
let a = 42;
let b = "Hello, world!";
let c = true;
let d = null;
let e;
let f = { name: "Alice" };
let g = [1, 2, 3];
let h = function () {
  return "I am a function";
};

console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // boolean
console.log(typeof d); // object (null is a special case)
console.log(typeof e); // undefined
console.log(typeof f); // object
console.log(typeof g); // object (arrays are a type of object)
console.log(typeof h); // function

// Exercise 2: Convert data types
let num = "123";
let str = 456;
let bool = 0;

num = Number(num); // Convert string to number
str = String(str); // Convert number to string
bool = Boolean(bool); // Convert number to boolean

console.log(num); // 123
console.log(str); // "456"
console.log(bool); // false

// Exercise 3: Check if a value is an array
let arr = [1, 2, 3];
let notArr = "I am not an array";

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(notArr)); // false

// Exercise 4: Working with objects
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(person.firstName); // John
console.log(person["lastName"]); // Doe

person.age = 31; // Update age
person.city = "New York"; // Add new property

console.log(person);
