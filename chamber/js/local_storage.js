// initialize display elements
const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}
// increment the number of visits.
numVisits++;
// store the last visit to the page
let lastVisit = Number(window.localStorage.getItem("time"));

//set the values of number of visitors and the date to the localstorage
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("time", new Date().getTime());
let getTime = new Date().getTime();

//get the total time since last visit
let totalTime= getTime - lastVisit;
// total time in days.
let days =totalTime/1000/60/60/24
//display the number of days value
todayDisplay.textContent= math.round(days)

//const unixTime = todayDisplay.textContent ;

//const ahora = new Date(unixTime*1000);
//console.log(ahora.toLocaleDateString("en-US"));
//expected: "5/16/2008"



