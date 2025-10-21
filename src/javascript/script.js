
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
