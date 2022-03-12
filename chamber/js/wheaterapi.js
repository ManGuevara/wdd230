// create an "apiURL" variable using const that stores the 'https://api.openweathermap.org/...' URL

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3936456&units=metric&appid=baf38c9c733510babe38947747892938';

//Use fetch() to request the given apiURL.

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp.toFixed(0);

  const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
  const desc = jsObject.weather[0].description;
  //document.querySelector('#icon-src').textContent = iconsrc;
  document.querySelector('#weathericon').setAttribute('src', iconsrc);
  document.querySelector('#weathericon').setAttribute('alt', desc);
  document.querySelector('figcaption').textContent = desc;
  document.querySelector('#windspeed').textContent = jsObject.wind.speed.toFixed(2);
    
  });
