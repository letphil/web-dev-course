const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start-btn");
const pauseButton = document.getElementById("pause-btn");
const resetButton = document.getElementById("reset-btn");
const timeLeft = document.getElementById("time-left");
const display = document.getElementById("display");

let duration;
let timer;
let timeLeftValue;

startButton.addEventListener("click", () => {
  if (durationInput.value) {
    duration = durationInput.value;
    timer = setInterval(() => {
      if (duration > 0) {
        duration--;
        timeLeftValue = `${Math.floor(duration / 60)}:${(
          "0" +
          (duration % 60)
        ).slice(-2)}`;
        display.textContent = timeLeftValue;
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }
});

pauseButton.addEventListener("click", () => {
  clearInterval(timer);
});

resetButton.addEventListener("click", () => {
  clearInterval(timer);
  durationInput.value = "";
  display.textContent = "0:00";
});
