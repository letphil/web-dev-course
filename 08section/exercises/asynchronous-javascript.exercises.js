// Exercise 1: Using setTimeout
// Create a function that logs "Hello, World!" to the console after 2 seconds.
function greet() {
  setTimeout(() => {
    console.log("Hello, World!");
  }, 2000);
}
greet();

// Exercise 2: Using Promises
// Create a function that returns a promise which resolves after 3 seconds with a message "Promise resolved!".
function promiseExample() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 3000);
  });
}
promiseExample().then((message) => console.log(message));

// Exercise 3: Using async/await
// Create an async function that waits for the promise from Exercise 2 to resolve and then logs the message.
async function asyncExample() {
  const message = await promiseExample();
  console.log(message);
}
asyncExample();

// Exercise 4: Fetch API
// Use the Fetch API to get data from a public API and log the response to the console.
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();
