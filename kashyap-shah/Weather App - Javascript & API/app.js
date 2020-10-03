/*PRELOADER*/
var preloader = document.getElementById("loading");
function loadingFunction(){
	preloader.style.display = 'none';
}

/*In Your Location From Sensors*/

//App constants and vars
const notifiactionElement = document.querySelector(".notifiaction");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");

const KELVIN = 273;

//API key
const key = "3600500a6be68aada7ff687e689beba0";

//weather data
const weather = {};

weather.temperature = {
	unit : "celcius"
}

//display weather
function displayWeather(){
	iconElement.innerHTML = `<img src="icons/${weather.iconId}.png" alt="">`;

	tempElement.innerHTML = `${weather.temperature.value}&#176;<span>C</span>`;

	descElement.innerHTML = weather.description;

	locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

//temperature conversion
//weather.temperature.value= 300-273
function celsiusToFahrenheit( temperature){
	return (temperature * 9/5) + 32;
}

function FahrenheitToKelvin( temperature){
	return (temperature - 32) * 5/9 + 273.15;
}

function KelvinToCelcius( temperature){
	return temperature - 273.15;
}

tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        tempElement.innerHTML = `${fahrenheit}&#176;<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}&#176;<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});

//user`s location
if("geolocation" in navigator){
	navigator.geolocation.getCurrentPosition( setPosition, showError);
}else{
	notifiactionElement.style.display= "block";
	notifiactionElement.innerHTML = "<p>Browser does`nt support Geolocation</p>";
}

function setPosition(position){
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;
	getWeather(latitude,longitude);
}

function showError(error){
	notifiactionElement.style.display="block";
	notifiactionElement.innerHTML=`<p> ${error.message}</p>`;
}

//API request and response
function getWeather(latitude,longitude){
	let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

	console.log(api);
	fetch(api)
		.then(function(response){
			let data = response.json();
			return data;
		})
	    .then(function(data){
	        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
	        weather.description = data.weather[0].description;
	        weather.iconId = data.weather[0].icon;
	        weather.city = data.name;
	        weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });	
}

/*For The City You Enter*/

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var icon = document.querySelector(".weatherIcon");
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=3600500a6be68aada7ff687e689beba0')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp']+ " &#176;K";
  var tempValueC = Math.floor(data['main']['temp']-KELVIN)+" &#176;C";
  var tempValueF = Math.floor((data['main']['temp']-KELVIN) * 9/5) + 32 + " &#176;F"
  var nameValue = data['name']+", "+data['sys']['country'];
  var descValue = data['weather'][0]['description'];
  var iconId = data.weather[0].icon;

  icon.innerHTML = `<img src="icons/${iconId}.png" alt="">`;
  main.innerHTML = nameValue;
  temp.innerHTML = "Temperature: "+tempValue+", "+tempValueC+", "+tempValueF;
  desc.innerHTML = "Description: "+descValue;
  input.value ="";
  console.log(data);

})
.catch(err => alert("Wrong city name!"));
})



