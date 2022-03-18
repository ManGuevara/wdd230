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
        console.log(logosinfo)
        });

console.log("hola")