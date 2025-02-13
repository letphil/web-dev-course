// API_KEY
function apiUrl(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
}

async function getWeather() {
  const city = cityInput.value;
  const url = apiUrl(city);

  weatherInfo.textContent = "Loading...";

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City was not found.");

    const data = await res.json();
    weatherInfo.textContent = `${data.name} : ${data.main.temp}C, ${data.weather[0].description}`;
  } catch (error) {
    weatherInfo.textContent = `Error: ${error.message}`;
  }
}
