const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateClock() {
  const currentTime = new Date();
  hours.textContent = String(currentTime.getHours()).padStart(2, "0");
  minutes.textContent = String(currentTime.getMinutes()).padStart(2, "0");
  seconds.textContent = String(currentTime.getSeconds()).padStart(2, "0");
}

setInterval(updateClock, 1000);
