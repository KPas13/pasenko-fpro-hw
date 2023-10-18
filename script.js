let urlApi = 'http://api.openweathermap.org/data/2.5/weather?q=CHERKASY&units=metric&APPID=5d066958a60d315387d9492393935c19';

let cityName = document.querySelector('#title');
let temprature = document.querySelector('#temperature');
let pressure = document.querySelector('#pressure');
let description = document.querySelector('#description');
let humidity = document.querySelector('#humidity');
let speed = document.querySelector('#wind-speed');
let degWind = document.querySelector('#wind-direction');
let icon = document.querySelector('#icon');

fetch(urlApi).then(responce => responce.json()).then(weatherData => {
    cityName.textContent = 'Weather in  ' + weatherData.name;
    temprature.textContent = 'Temperature: ' + weatherData.main.temp;
    pressure.textContent = 'Pressure: ' + weatherData.main.pressure;
    description.textContent = 'Description: ' + weatherData.weather[0].description;
    humidity.textContent = 'Humidity: ' + weatherData.main.humidity;
    speed.textContent = 'Wind speed: ' + weatherData.wind.speed;
    degWind.textContent = 'Wind direction: ' + weatherData.wind.deg + '°';
    let iconCode = weatherData.weather[0].icon;
    let iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';
    icon.src = iconUrl;
});