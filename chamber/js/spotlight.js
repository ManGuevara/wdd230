const requestURL = 'https://manguevara.github.io/wdd230/chamber/data/data.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        let companyArray = [];
        const logosinfo = jsonObject['logosinfo'];
        let golden = logosinfo.find(company =>company.status=="golden")
        let silver = logosinfo.find(company =>company.status=="silver")
        let bronze = logosinfo.find(company =>company.status=="bronze")
        companyArray.push(golden)
        companyArray.push(silver)
        companyArray.push(bronze)
        /*console.log(companyArray)*/
        let spotlight=document.querySelector(".spotlight")
        
        companyArray.forEach((company,index)=>{
            let spot = document.createElement("div")
            let h1 = document.createElement("h1")
            let imageSpot= document.createElement("img")
            let p1 = document.createElement("p")
            let p2 = document.createElement("p")
            
            h1.innerHTML = company.name
            imageSpot.src = company.imageurl
            p1.innerHTML = company.phone
            p2.innerHTML = company.address
            spot.classList.add(`spot${index+1}`)
            spot.append(h1)
            spot.append(imageSpot)
            spot.append(p1)
            spot.append(p2)
            spotlight.append(spot)
        })
        });

