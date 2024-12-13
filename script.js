function openPopUp() {

  document.querySelector(".alert").style.display = "none";
  document.querySelector("body").style.backgroundColor = "#5397e2";
  
  setTimeout(() => {
    console.log("Updating Weather");
    document.querySelector(".app").style.display = "block";
  }, "1000");
}

function warning() {
  document.querySelector(".alert").style.display = "none";
  setTimeout(() => {
    alert("Can't update weather without permissions!");
  }, "100");
  setTimeout(() => {
    document.querySelector(".alert").style.display = "block";
  }, "500");
  
}


const getWeather = async (apiURL) => {
  const response = await fetch(apiURL);
  const data = await response.json();
  console.log(data);
    
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp h1").innerHTML = ` ${Math.round(data.main.temp)}` + " °";
  document.querySelector(".min-max").innerHTML = `${Math.round(data.main.temp_min)}°/${Math.round(data.main.temp_max)}° Feels like ${Math.round(data.main.feels_like)}°`;
  document.querySelector(".weather").innerHTML = data.weather[0].main;
  document.querySelector(".value1").innerHTML = data.main.humidity +" %";
  document.querySelector(".value2").innerHTML = data.main.pressure +" mb";
  document.querySelector(".value3").innerHTML = data.wind.speed + " kph";
  document.querySelector(".value4").innerHTML = data.wind.deg + " °";
  document.querySelector(".value5").innerHTML = "NA";
  document.querySelector(".value6").innerHTML = data.visibility +" m";
  document.querySelector(".value7").innerHTML = "NA";
  if (data.weather[0].main === "Mist") {
    document.querySelector(".temp img").src = "images/mist.png";
  } else if (data.weather[0].main === "Snow") {
    document.querySelector(".temp img").src = "images/snow.png";
  } else if (data.weather[0].main === "Rain") {
    document.querySelector(".temp img").src = "images/rain.png";
  } else if (data.weather[0].main === "Clear") {
    document.querySelector(".temp img").src = "images/clear.png";
  } else if (data.weather[0].main === "Clouds") {
    document.querySelector(".temp img").src = "images/clouds.png";
  } else if (data.weather[0].main === "Drizzle") {
    document.querySelector(".temp img").src = "images/drizzle.png";
  } else if (data.weather[0].main === "Haze") {
    document.querySelector(".temp img").src = "images/humidity.png";
  }
};


navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
  
    const apiKey = "9f94cbe309e8a40379e036219f8e9718";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}` + "&units=metric";
  
  getWeather(apiURL);
});


