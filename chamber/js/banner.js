
let date = new Date();
let day = date.getDay();

function banner(){

document.querySelector('#banner').classList.toggle("event_news")
}

if(day ===1){ 
    banner()
} else if(day ===2){
    banner()
}
