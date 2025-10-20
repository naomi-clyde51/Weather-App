/*function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = Math.round(response.data.temperature.current);
    let city = response.data.city;
    let country = response.data.country;
let condition = response.data.condition.description;
    temperatureElement.innerHTML = `The temperature in ${city}, ${country} is ${temperature} degrees F (${condition}).`;
}

let city = "New York";
let apiKey = "ffb73coa05d42e881774a7tbf603bb16";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

// Call/Get information that apiUrl will display
axios.get(apiUrl).then(displayTemperature);*/
