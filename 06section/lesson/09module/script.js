console.log("Start");
// console.log("Processing...");
// console.log("End");

setTimeout(() => {
  console.log("Hello After 3 seconds!");
}, 3000);

console.log("End");

let count = 0;

const interval = setInterval(() => {
  ++count;
  console.log(`Count: ${count}`);

  if (count === 5) {
    clearInterval(interval);
  }
}, 1000);

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Data loaded successfully!");
    } else {
      reject("Failed to load data");
    }
  }, 2000);
});

myPromise
  .then((response) => {
    if (response === "Data loaded successfully!") {
      return "new value";
    }
  })
  .then((value) => {
    console.log("value =", value);
  })
  .catch((error) => console.error(error));

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() > 0.5; // randomly succeed or fail
      success ? resolve("Fetched Data!") : reject("Error fetchign data!");
    }, 2000);
  });
}

fetchData()
  .then((data) => console.log(data)) // success
  .catch((error) => console.error(error));

async function loadData() {
  console.log("FETCHING DATA....");
  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => resolve("Data successfully loaded!"), 3000);
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

loadData();
console.log("End of script");
