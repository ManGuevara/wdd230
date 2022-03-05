//store the resource, the URL of the JSON file into a const variable
const requestURL = 'https://manguevara.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.cards');

// basic fetch() method and feed it the required argument, 
//the URL and use the .then() method that returns a Promise 
//which response we will work with as an argument to an anonymous function.
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //store the results of the converted response into an array 
        //since the data source is a neatly packed array of records 
        //named "logosinfo".
        const logosinfo = jsonObject['logosinfo'];
        console.table(jsonObject); // temporary checking for valid response and data parsing
        //logosinfo.forEach(displayProphets);
        logosinfo.forEach(displayLogosinfo);    
        });

// Define a function named "displayProphets"
//accept one parameter named "prophet" which 
//will receive each element of the prophets array.
function displayLogosinfo(logoinfo){
    // Create elements to add to the document
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let site = document.createElement('a');

    // Build the image attributes by using the setAttribute method for the src
    //, alt, and loading attribute values.
    logo.setAttribute('src',logoinfo.imageurl);
    logo.setAttribute('alt',`Logo of ${logoinfo.name}`);
    logo.setAttribute('loading','lazy');
     // Change the textContent property of the p elements
    p1.textContent = logoinfo.address;
    p2.textContent = logoinfo.phone;
    // Change the textContent property of the a elements
    site.setAttribute = ('target',"_blank");
    site.textContent = logoinfo.web;

    // Add/append the section(card) with the h2 element
    card.appendChild(logo);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(site);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
    



    


}
    