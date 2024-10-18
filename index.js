function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");

  cityElement.textContent = response.data.city;
  temperatureElement.textContent = temperature; 
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value; 

  let cityElement = document.querySelector("#current-city");
  cityElement.textContent = city;

  let apiKey = "0c3e39tafb27o043d0ad8132b630b3e7";
  let apiURL = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric';

  axios.get(apiURL)
      .then(displayTemperature)
      .catch(error => console.error("Error fetching weather data:", error)); // Added error handling
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
