//store the resource, the URL of the JSON file into a const variable
const requestURL = 'https://manguevara.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.cards');
let dataRequest;

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
        dataRequest = logosinfo;
        logosinfo.forEach(displayLogosinfo);    
        });

// Define a function named "displayLogosinfo"
//accept one parameter named "logoinfo" which 
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
    site.setAttribute("href", logoinfo.web);
    site.setAttribute('target', "_blank");
    site.innerHTML = logoinfo.web;
    

    // Add/append the section(card) with the h2 element
    
    card.appendChild(logo);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(site);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}

//..........table.............//
//accessing the element with id= list and access to list of classes of the  elements accesed

document.getElementById('list').addEventListener('click', function(){
    document.getElementById('list').classList.add('selected');
    document.getElementById('grid').classList.remove('selected');
    cards.classList.add('list')
    //store a html code for table
    table = `<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Telephone</th>
            <th>website</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>`;

    //modifying the table with innerHTML
    cards.innerHTML = table;
    dataRequest.forEach((c) => {
        // Create elements to add to the document
        let tr = document.createElement('tr');
        let name = document.createElement('th');
        let address = document.createElement('th');
        let phone = document.createElement('th');
        let website = document.createElement('th');

        //Change the textContent property of the th elements
        name.textContent = c.name;
        address.textContent = c.address;
        phone.textContent = c.phone;
        website.textContent = c.web;

        // // Add/append the tr with the th elements
        tr.appendChild(name);
        tr.appendChild(address);
        tr.appendChild(phone);
        tr.appendChild(website);

        document.querySelector('table > tbody').appendChild(tr);

    });

});

//accessing the element with id= list and access to list of classes of the  elements accesed
document.getElementById('grid').addEventListener('click', function(){
    document.getElementById('grid').classList.add('selected');
    document.getElementById('list').classList.remove('selected');
    cards.classList.remove('list');
    cards.innerHTML="";
    dataRequest.forEach(displayLogosinfo);
})


