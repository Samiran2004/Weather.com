// const apiKey = "25dd08c9d01ae715413711448a94c26a";
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=kolkata`;
const cityname = document.querySelector(".cityName");
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humi");
const windSpeed = document.querySelector("#windSpeed");
const submitBtn = document.querySelector("#searchButton");
const weatherImg = document.querySelector(".weather-icon")
// async function checkWeather() {
//     const response = await fetch(apiUrl + `&appid=${apiKey}`);
//     var data = await response.json();
//     console.log(data);
//     cityname.innerHTML = data.name;
//     temp.innerHTML = `${Math.round(data.main.temp)}°C`;
//     humidity.innerHTML = `${data.main.humidity}%`;
//     windSpeed.innerHTML = `${data.wind.speed}km/hr`
// }
// checkWeather();
submitBtn.addEventListener('click', () => {
    // console.log("Mouse click.");
    const searchValue = document.querySelector("#input").value;
    console.log(searchValue);
    const apiKey = "25dd08c9d01ae715413711448a94c26a";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchValue}`;
    async function checkWeather() {
        const response = await fetch(apiUrl + `&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);
        cityname.innerHTML = data.name;
        temp.innerHTML = `${Math.round(data.main.temp)}°C`;
        humidity.innerHTML = `${data.main.humidity}%`;
        windSpeed.innerHTML = `${data.wind.speed}km/hr`

        if (data.weather[0].main == 'Clouds') {
            weatherImg.src = "cloudy.png";
        }
        else if (data.weather[0].main == 'Rain') {
            weatherImg.src = "raining.png";
        }
        else if (data.weather[0].main == 'Haze') {
            weatherImg.src = "fog.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherImg.scr = "sun.png";
        }
        else {
            weatherImg.src = "storm.png";
        }
    }
    checkWeather();
});