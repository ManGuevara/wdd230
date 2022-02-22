let temp= document.getElementById('temperature');
let wSpeed=document.getElementById("windspeed");

temp.innerHTML = "10";
wSpeed.innerHTML = "5";


let windChilldFormula= function(t,s){
    let windChill="";
    if(t<=10 && s>=4.8){
        windChill= 35.74+0.6215*t-35.75*(s**0.16)+0.4275*t*(s**0.16)

        return windChill

    }else {return "N/A"}
};

document.getElementById("factor").innerHTML= windChilldFormula(parseFloat(temp.innerHTML) , parseFloat(wSpeed.innerHTML))