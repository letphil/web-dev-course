const dropdown = document.getElementById("dropdown");
const output = document.getElementById("output");

dropdown.addEventListener("change", function () {
  output.textContent = "You Selected: " + dropdown.value;
});

const input = document.getElementById("textInput");
const display = document.getElementById("displayText");

input.addEventListener("keyup", function (event) {
  display.textContent = "You Typed: " + event.target.value;
});

function sayHello() {
  alert("Hello, Javascript");
}

const button = document.getElementById("btn");

button.addEventListener("click", () => {
  alert("HELLO FROM JAVASCRIPT");
});

const text = document.getElementById("hoverText");

text.addEventListener("mouseover", function () {
  text.style.color = "red";
});

text.addEventListener("mouseout", function () {
  text.style.color = "black";
});
