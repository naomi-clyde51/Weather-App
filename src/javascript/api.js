function refreshWeather(response) {
    
    let temperatureElement = document.querySelector("#current-temp__heading");
    //let emojiElement = document.querySelector("#current-icon");
    let cityElement = document.querySelector("#city__name");
    let descriptionElement = document.querySelector("#current-description");
    let humidityElement = document.querySelector("#current-humidity");
    let windElement = document.querySelector("#current-wind");
let iconElement = document.querySelector("#current-icon");

let temperature = Math.round(response.data.temperature.current);
//let emoji = response.data.condition.icon;
let cityinput = response.data.city;
let description = response.data.condition.description;
let humidity = response.data.temperature.humidity;
let wind = Math.round(response.data.wind.speed);


temperatureElement.innerHTML = `${temperature}°F`
//emojiElement.innerHTML = `${emoji}`
cityElement.innerHTML = `${cityinput}`
descriptionElement.innerHTML = `${description}`
humidityElement.innerHTML = `Humidity: <span style="color: red"
                ><strong>${humidity}%</strong></span
              >`
windElement.innerHTML = `Wind: <span style="color: red"
                ><strong>${wind}%</strong></span
              >`
iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon" id="current-icon" alt="weather icon">`    

getForecast(response.data.city);
    
}

function searchCity(city) {
    let apiKey = "ffb73coa05d42e881774a7tbf603bb16";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(refreshWeather);
}

// Function to handle city search
function search(event) {
    event.preventDefault();
        let searchInput = document.querySelector("#search-text-input");
        let loadingMessage = document.querySelector("#city-loading");
        let currentCity = document.querySelector("#city__name");
        
        if (searchInput.value) {
            loadingMessage.innerHTML = `Searching for ${searchInput.value}...`;
            currentCity.innerHTML = `${searchInput.value}`;
            searchCity(searchInput.value);
        } else {
            currentCity.innerHTML = null;
            alert("Please type a city...");
        }
    }

      
        // Event listener for the search form
    let searchForm = document.querySelector("#search-form");
    searchForm.addEventListener("submit", search);

// Format date
function formatDay (timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        return days[date.getDay()];
}


    // Forecast for next 5 days

    function getForecast (city) {
        let apiKey = "ffb73coa05d42e881774a7tbf603bb16";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayForecast);
    }
    
    function displayForecast(response) {
let forecastHtml = "";
        
        response.data.daily.forEach(function (day, index) {
            if (index < 5) {
            forecastHtml += 
            `<div class="weather-forecast-day">
        <div class="weather-forecast-date">${formatDay(day.time)}</div>
        <div class="weather-forecast-icon">
        <img src="${day.condition.icon_url}"
        </div>
        <div class="weather-forecast-temperatures">
          <div class="weather-forecast-temperature">
            <strong>${Math.round(day.temperature.maximum)}</strong>
          </div>
          <div class="weather-forecast-temperature">${Math.round(day.temperature.minimum)}</div>
        </div>
      </div>
            `;}
        });
        
        let forecastElement = document.querySelector("#forecast");
        forecastElement.innerHTML = forecastHtml;
    }


    