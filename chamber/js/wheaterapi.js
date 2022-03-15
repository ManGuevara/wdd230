// create an "apiURL" variable using const that stores the 'https://api.openweathermap.org/...' URL

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3936456&units=metric&appid=baf38c9c733510babe38947747892938';

//Use fetch() to request the given apiURL.

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp.toFixed(0);

  const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
  const desc = jsObject.weather[0].description;
  //accessing elements from the DOM;
  document.querySelector('#weathericon').setAttribute('src', iconsrc);
  document.querySelector('#weathericon').setAttribute('alt', desc);
  document.querySelector('figcaption').textContent = desc;
  document.querySelector('#windspeed').textContent = jsObject.wind.speed.toFixed(2);
  let temp= Number(document.getElementById('current-temp').textContent);
  let wSpeed=Number(document.getElementById("windspeed").textContent);

  
  let windChilldFormula= function(t,s){
    let windChill="";
    if(t<=10 && s>=4.8){
        windChill= 13.12+0.6215*t-11.37*(s**0.16)+0.3965*t*(s**0.16)

        return windChill.toFixed(2)

    }else {return "N/A"}
};

document.getElementById("factor").innerHTML= windChilldFormula(temp , wSpeed)

  
  });
