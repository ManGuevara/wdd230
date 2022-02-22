let temp= document.getElementById('temperature');
let wSpeed=document.getElementById("windspeed");

temp.innerHTML = "10";
wSpeed.innerHTML = "5";


let windChilldFormula= function(t,s){
    let windChill="";
    if(t<=10 && s>=4.8){
        windChill= parseFloat(13.12+0.6215*t-11.37*(s**0.16)+0.3965*t*(s**0.16))

        return windChill.toFixed(2)

    }else {return "N/A"}
};

document.getElementById("factor").innerHTML= windChilldFormula(parseFloat(temp.innerHTML) , parseFloat(wSpeed.innerHTML))



