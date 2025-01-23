// Add your API key here
// where to retrieve api key
// https://home.openweathermap.org/users/sign_in
// const API_KEY = "b1b15e88fa797225412429c1c50c122a1";

// Get the elements by their ID
const locationInput = document.getElementById("location");
const searchButton = document.getElementById("search-btn");
const temperatureElement = document.getElementById("temperature");
const humidityElement = document.getElementById("humidity");
const windSpeedElement = document.getElementById("wind-speed");
const errorMessageElement = document.getElementById("error-message");

// Add an event listener to the search button
searchButton.addEventListener("click", () => {
  // Get the value of the location input
  const location = locationInput.value;

  // Check if the location is empty
  if (location === "") {
    errorMessageElement.textContent = "Please enter a location";
  } else {
    // Fetch the weather information
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Check if the location is found
        if (data.cod === "404") {
          errorMessageElement.textContent = "Location not found";
        } else {
          // Display the weather information
          errorMessageElement.textContent = "";
          temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
          humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
          windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
        }
      })
      .catch((error) => {
        // Display an error message
        errorMessageElement.textContent =
          "An error occurred. Please try again.";
      });
  }
});
