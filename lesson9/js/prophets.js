//store the resource, the URL of the JSON file into a const variable
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
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
        //named "prophets".
        const prophets = jsonObject['prophets'];
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        prophets.forEach(displayProphets);    
        });
    

// Define a function named "displayProphets"
//accept one parameter named "prophet" which 
//will receive each element of the prophets array.
function displayProphets(prophet) {
    
    
    
    
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    //create two other components for the birth date and birth place
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name}  ${prophet.lastname}`;
    // Change the textContent property of the p elements
    p1.textContent = `Date of birth: ${prophet.birthdate}`;
    p2.textContent = `Placeof Birth: ${prophet.birthplace}`;
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of  ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(portrait);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
    
  }