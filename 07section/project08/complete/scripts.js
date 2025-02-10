const ui = document.getElementById("ui");
const screen = document.getElementById("screen");

const buttons = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "C",
  "0",
  "=",
  "+",
];

const operators = ["/", "*", "-", "+"];
let evalStr = "";
let operatorDetect = false;

buttons.forEach((button) => {
  const btn = document.createElement("button");
  btn.textContent = button;
  btn.addEventListener("click", () => {
    if (operatorDetect && operators.includes(button)) {
      return;
    }

    if (operatorDetect && button === "=") {
      return;
    }

    if (operatorDetect && button === "C") {
      operatorDetect = false;
    }

    if (button === "0" && screen.textContent === "") {
      return;
    }

    if (operatorDetect) {
      screen.textContent = "";
      operatorDetect = false;
    }

    if (button === "C") {
      screen.textContent = "";
      evalStr = "";
    } else if (button === "=") {
      try {
        screen.textContent = eval(evalStr);
      } catch (error) {
        screen.textContent = "Error";
      }
    } else {
      evalStr += button;

      if (operators.includes(button)) {
        operatorDetect = true;
      } else {
        screen.textContent += button;
      }
    }
  });

  ui.appendChild(btn);
});
