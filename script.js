document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "aa781886155d66b53e95c99364eafeca"; // Replace with your actual OpenWeatherMap API key
    const getWeatherBtn = document.getElementById("getWeatherBtn");
    const locationInput = document.getElementById("locationInput");
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");

    getWeatherBtn.addEventListener("click", () => {
        const city = locationInput.value;

        // Check if a city name is provided
        if (city.trim() === "") {
            alert("Please enter a city name.");
            return;
        }

        // Fetch weather data from OpenWeatherMap API
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    // Update the weather information on the page
                    cityName.textContent = data.name;
                    temperature.textContent = `${Math.round(data.main.temp)}°C`;
                    description.textContent = data.weather[0].description;
                } else {
                    alert(`City not found: ${city}`);
                }
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                alert("An error occurred while fetching weather data.");
            });
    });
});
