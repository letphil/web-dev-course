# Section 8: JavaScript Basic Concepts

## Overview of JavaScript

### JavaScript

- JavaScript is a popular programming language used for building interactive websites.
- It is a client-side scripting language that runs in the browser and allows you to add dynamic behavior to web pages.
- JavaScript can be used to create interactive forms, validate user input, and update the content of a web page without reloading it.
- JavaScript is also used to create animations, games, and other interactive elements on the web.

### JavaScript Basics

- JavaScript is a high-level, interpreted programming language.
- It is loosely typed, which means you don't have to declare the data type of a variable when you create it.
- JavaScript uses the `var`, `let`, and `const` keywords to declare variables.
- JavaScript is case-sensitive, so `myVariable` and `MyVariable` are considered different variables.
- JavaScript statements are terminated by a semicolon (`;`).

### JavaScript in HTML

- You can include JavaScript code in an HTML document using the `<script>` tag.
- The `<script>` tag can be placed in the `<head>` or `<body>` section of an HTML document.
- You can write JavaScript code directly in the `<script>` tag or link to an external JavaScript file using the `src` attribute.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>JavaScript demo</title>
    <script>
      // JavaScript code goes here
      console.log("Hello, world!");
    </script>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="script.js"></script>
  </body>
</html>
```

### JavaScript Comments

- You can add comments to your JavaScript code using `//` for single-line comments and `/* */` for multi-line comments.
- Comments are ignored by the JavaScript interpreter and are used to document your code.

```javascript
// This is a single-line comment

/*
This is a
multi-line
comment
*/
```

### Console Logging

- You can use the `console.log()` function to output messages to the browser console.
- The browser console is a developer tool that allows you to view and debug JavaScript code.

```javascript
console.log("Hello, world!");
```

### Declaring Variables

- You can declare variables in JavaScript using the `var`, `let`, and `const` keywords.
- The `var` keyword is used to declare variables with function scope.
- The `let` keyword is used to declare variables with block scope.
- The `const` keyword is used to declare constants that cannot be reassigned.

```javascript
var x = 10;
let y = 20;
const PI = 3.14;
```

- [JavaScript Basics](./exercises/declaring-variables.exercises.js)

### Data Types

- JavaScript supports several data types, including numbers, strings, booleans, arrays, objects, and functions.
- You can use the `typeof` operator to determine the data type of a variable.

```javascript
let num = 10; // number
let str = "Hello"; // string
let bool = true; // boolean
let arr = [1, 2, 3]; // array
let obj = { name: "John", age: 30 }; // object
let func = function () {}; // function

console.log(typeof num); // number
console.log(typeof str); // string
console.log(typeof bool); // boolean
console.log(typeof arr); // object
console.log(typeof obj); // object
console.log(typeof func); // function
```

- [Data Types](./exercises/data-types.exercises.js)

### Operators

- JavaScript supports various operators, such as arithmetic, assignment, comparison, logical, and bitwise operators.
- You can use operators to perform calculations, assign values, compare values, and combine conditions.

```javascript
let x = 10;
let y = 5;

console.log(x + y); // addition
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // division
console.log(x % y); // modulus
console.log(x ** y); // exponentiation

let z = x + y; // assignment
console.log(z);

console.log(x > y); // greater than
console.log(x < y); // less than
console.log(x === y); // equal to
console.log(x !== y); // not equal to

console.log(x > 5 && y < 10); // logical AND
console.log(x > 5 || y < 5); // logical OR
console.log(!(x > 5)); // logical NOT
```

- [Operators](./exercises/operators.exercises.js)

### Math Object

- JavaScript provides the `Math` object, which contains properties and methods for mathematical operations.

```javascript
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-10)); // 10
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.9)); // 4

let num1 = 10;
let num2 = 20;

console.log(Math.max(num1, num2)); // 20

let randomNum = Math.random();
console.log(randomNum);
```

- [Math Object](./exercises/math-object.exercises.js)

### Conditional Statements

- JavaScript supports conditional statements, such as `if`, `else if`, and `else`, to execute different code blocks based on different conditions.
- You can use conditional statements to make decisions in your code.

```javascript
let age = 18;

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}
```

- [Conditional Statements](./exercises/conditional-statements.exercises.js)

### Loops

- JavaScript supports loops, such as `for`, `while`, and `do...while`, to execute code repeatedly.
- You can use loops to iterate over arrays, perform calculations, and execute code based on a condition.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);
```

- [Loops](./exercises/loops.exercises.js)

### Functions

- JavaScript functions are blocks of code that can be called

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John"); // Hello, John!

function add(x, y) {
  return x + y;
}

let sum = add(5, 3);

console.log(sum); // 8
```

- [Functions](./exercises/functions.exercises.js)

### control flow exercises

- [control flow exercises](./exercises/control-flow-exercises.js)

### Arrays and Objects methods

- JavaScript provides built-in methods for working with arrays and objects.
- You can use these methods to add, remove, and modify elements in arrays, as well as access and update properties in objects.

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.push(6); // add an element to the end of the array

numbers.pop(); // remove the last element from the array

numbers.shift(); // remove the first element from the array

numbers.unshift(0); // add an element to the beginning of the array

console.log(numbers); // [0, 2, 3, 4, 5]

let person = {
  name: "John",
  age: 30,
};

person.name = "Jane"; // update a property in the object

person.city = "New York"; // add a new property to the object

delete person.age; // remove a property from the object

console.log(person); // { name: 'Jane', city: 'New York' }
```

- [Arrays and Objects methods](./exercises/arrays-objects-methods.exercises.js)

### DOM Manipulation

- The Document Object Model (DOM) is a programming interface for web documents.
- It represents the structure of an HTML document as a tree of nodes.
- You can use JavaScript to manipulate the DOM, such as adding, removing, and updating elements on a web page.

```javascript
// Get an element by ID
let heading = document.getElementById("heading");

// Get elements by class name
let paragraphs = document.getElementsByClassName("paragraph");

// Get elements by tag name
let divs = document.getElementsByTagName("div");

// Get an element by CSS selector
let button = document.querySelector("#button");

// Get all elements that match a CSS selector
let buttons = document.querySelectorAll(".btn");

// Create a new element
let newParagraph = document.createElement("p");

// Set the text content of an element
newParagraph.textContent = "This is a new paragraph.";

// Append the new element to the document
document.body.appendChild(newParagraph);

// Remove an element from the document
document.body.removeChild(newParagraph);

// Update the style of an element
heading.style.color = "red";

// Add a class to an element
button.classList.add("btn-primary");

// Remove a class from an element
button.classList.remove("btn-secondary");
```

- [DOM Manipulation](./exercises/dom-manipulation.exercises.js)

### HTML Events

- JavaScript allows you to respond to user actions, such as clicks, keypresses, and mouse movements, using event handlers.

```javascript
// Add an event listener to an element
button.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Remove an event listener from an element
button.removeEventListener("click", function () {
  console.log("Button clicked!");
});

// Create a custom event
let customEvent = new Event("custom");

// Dispatch a custom event
button.dispatchEvent(customEvent);
```

- [Events](./exercises/html-events.exercises.js)

### Asynchronous JavaScript

- JavaScript is a single-threaded language, which means it can only execute one task at a time.
- Asynchronous JavaScript allows you to perform tasks in the background without blocking the main thread.

```javascript
// setTimeout
console.log("Start");
setTimeout(function () {
  console.log("Timeout");
}, 2000);
console.log("End");

// setInterval
let count = 0;
let interval = setInterval(function () {
  console.log(count);
  count++;
  if (count > 5) {
    clearInterval(interval);
  }
}, 1000);

// Promises
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 2000);
});

promise.then(function (result) {
  console.log(result);
});

// Async/Await
async function fetchData() {
  let response = await fetch("https://api.example.com/data");
  let data = await response.json();
  console.log(data);
}

fetchData();

// Error handling
async function fetchDataWithErrorHandling() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchDataWithErrorHandling();

// Fetch API

fetch("https://api.example.com/data")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });
```

- [Asynchronous JavaScript](./exercises/asynchronous-javascript.exercises.js)
