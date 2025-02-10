// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3. Print the elements of an array
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 4. Calculate the sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum:", sum);

// 5. Print the multiplication table for a given number
const number = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
// 6. Print numbers from 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 7. Print the first 10 Fibonacci numbers
let a = 0,
  b = 1,
  next;
console.log(a);
console.log(b);
for (let i = 2; i < 10; i++) {
  next = a + b;
  console.log(next);
  a = b;
  b = next;
}

// 8. Print the elements of an array in reverse order
const vegetables = ["carrot", "broccoli", "asparagus", "cauliflower", "corn"];
for (let i = vegetables.length - 1; i >= 0; i--) {
  console.log(vegetables[i]);
}

// 9. Calculate the factorial of a given number
const num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(`Factorial of ${num}:`, factorial);

// 10. Print all prime numbers between 1 and 50
for (let i = 2; i <= 50; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
