const playButton = document.getElementById("play");
const resultElement = document.getElementById("result");
const slot1Element = document.getElementById("slot1");
const slot2Element = document.getElementById("slot2");
const slot3Element = document.getElementById("slot3");

const slotOptions = ["🍒", "🍋", "🍊", "7️⃣", "🎰", "💰", "🟡"];

const slots = [slot1Element, slot2Element, slot3Element];
let resultGrid = [[], [], []];

document.onload = shuffleSlotsAndReset();

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleSlotsAndReset() {
  resultGrid = [[], [], []];
  slots.forEach((slot) => {
    slot.innerHTML = "";
    let shuffledOptions = shuffle(slotOptions);
    shuffledOptions = shuffledOptions
      .concat(shuffledOptions)
      .concat(shuffledOptions);

    // last 3

    shuffledOptions.slice(-3).forEach((option, index) => {
      resultGrid[index].push(option);
    });

    shuffledOptions.forEach((option) => {
      const p = document.createElement("p");
      p.textContent = option;
      p.classList.add("slotOptions");
      slot.appendChild(p);
    });
  });
}

playButton.addEventListener("click", function () {
  const winConditions = [
    [resultGrid[0][0], resultGrid[0][1], resultGrid[0][2]],
    [resultGrid[1][0], resultGrid[1][1], resultGrid[1][2]],
    [resultGrid[2][0], resultGrid[2][1], resultGrid[2][2]],
    [resultGrid[0][0], resultGrid[1][0], resultGrid[2][0]],
    [resultGrid[0][1], resultGrid[1][1], resultGrid[2][1]],
    [resultGrid[0][2], resultGrid[1][2], resultGrid[2][2]],
    [resultGrid[0][0], resultGrid[1][1], resultGrid[2][2]],
    [resultGrid[0][2], resultGrid[1][1], resultGrid[2][0]],
  ];

  const GRID_INDEXES = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  // store winCondtion index
  let winConditionIndex = -1;

  const isWin = winConditions.some((condition, idx) => {
    const win = condition.every((value) => value === condition[0]);
    if (win) winConditionIndex = idx;

    return win;
  });

  if (playButton.innerText === "Reset") {
    slots.forEach((slot) => {
      slot.scrollTo({
        top: 0,
        behavior: "auto",
      });
    });

    shuffleSlotsAndReset();
    playButton.innerText = "Play";
    resultElement.textContent = "";
    return;
  } else {
    console.log("isWin =", isWin);

    if (isWin) {
      resultElement.textContent = "You win!";

      GRID_INDEXES[winConditionIndex].forEach((value, index) => {
        console.log("value", value, "index", index);

        const selector = `#slot${value[0] + 1} p:nth-child(${
          slotOptions.length * 3 - 3 + value[1] + 1
        })`;

        document.querySelector(selector).classList.add("win");
      });
    }

    slots.forEach((slot) => {
      slot.scrollTo({
        top: slot.scrollHeight,
        behavior: "smooth",
      });
    });
    playButton.innerText = "Reset";
  }
});
