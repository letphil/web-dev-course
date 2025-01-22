// 1. Create an array of numbers and use the map method to create a new array with each number squared.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// 2. Use the filter method to create a new array with only the even numbers from the original array.
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 3. Use the reduce method to find the sum of all the numbers in the array.
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// 4. Create an object representing a person with properties for name, age, and hobbies (an array of strings).
const person = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "gaming", "hiking"],
};

// 5. Add a method to the person object that returns a string introducing the person.
person.introduce = function () {
  return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
};
console.log(person.introduce()); // Hi, my name is John Doe and I am 30 years old.

// 6. Add a method to the person object that returns the person's hobbies as a comma-separated string.
person.getHobbies = function () {
  return this.hobbies.join(", ");
};
console.log(person.getHobbies()); // reading, gaming, hiking

// 7. Create an array of person objects and use the find method to locate a person by name.
const people = [
  { name: "Alice", age: 25, hobbies: ["painting", "cycling"] },
  { name: "Bob", age: 28, hobbies: ["cooking", "running"] },
  { name: "Charlie", age: 35, hobbies: ["swimming", "reading"] },
];
const personNamedBob = people.find((person) => person.name === "Bob");
console.log(personNamedBob); // { name: 'Bob', age: 28, hobbies: ['cooking', 'running'] }

// 8. Use the some method to check if there is at least one person older than 30 in the array.
const isThereSomeoneOlderThan30 = people.some((person) => person.age > 30);
console.log(isThereSomeoneOlderThan30); // true

// 9. Use the every method to check if all people in the array are older than 20.
const areAllPeopleOlderThan20 = people.every((person) => person.age > 20);
console.log(areAllPeopleOlderThan20); // true

// 10. Use the sort method to sort the array of people by age in ascending order.
const sortedPeopleByAge = people.sort((a, b) => a.age - b.age);
console.log(sortedPeopleByAge);
