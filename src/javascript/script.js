// Function to handle city search
function search(event) {
    event.preventDefault();
        let searchInput = document.querySelector("#search-text-input");
        let searchCity = document.querySelector("#city__name");
        let currentCity = document.querySelector("h1")
        if (searchInput.value) {
          searchCity.innerHTML = `Searching for ${searchInput.value}...`;
          currentCity.innerHTML = `${searchInput.value}`;
          console.log(searchInput.value);
        } else {
          city__name.innerHTML = null;
          alert("Please type a city...");
        }
}

      
        // Event listener for the search form
    let form = document.querySelector("#search-form");
    form.addEventListener("submit", search);

// Define current date and time
let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

let currentDay = document.querySelector("#current-day");
let currentTime = document.querySelector("#current-time");


// Display current day and time
currentDay.innerHTML = `${day}`;
        currentTime.innerHTML = `${hours}:${minutes}`;
