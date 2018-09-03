function travelTime(arr) {
    let countries = new Map();

    for (let i = 0; i < arr.length; i++) {
        let [country, city, price] = arr[i].split(" > ");
        city = city[0].toUpperCase() + city.slice(1);

        if (countries.has(country)) {
            if(countries.get(country).hasOwnProperty(city)) {
                if (countries.get(country)[city] > Number(price)) countries.get(country)[city] = Number(price);
            } else {
                countries.get(country)[city] = Number(price);
            }
        } else {
            let cityTmp = {};
            cityTmp[city] = Number(price);
            countries.set(country, cityTmp)
        }
    }

    for (const countriessKey of countries) {
            let sortedCities = Object.keys(countries.get(countriessKey[0])).sort((a, b) => {
                return countries.get(countriessKey[0])[a] - countries.get(countriessKey[0])[b]
            })
        let sCity = {};
        for (const arrVal of sortedCities) {
            sCity[arrVal] = countries.get(countriessKey[0])[arrVal];
        }
        countries.set(countriessKey[0], sCity);
    }

    let co = [];
    for (const arrVal of countries.keys()) {
        co.push(arrVal)
    }
    let countrySort = co.sort((a, b) => {return a.localeCompare(b);})

    let final = [];
    for (const countryVal of countrySort) {
        countries.set(countryVal, countries.get(countryVal));
        final[countryVal] = countries.get(countryVal);
    }

    for (const finalDataKey in final) {
        let output = `${finalDataKey} -> `;
        for (const finalDataKeyKey in final[finalDataKey]) {
            output += `${finalDataKeyKey} -> ${final[finalDataKey][finalDataKeyKey]} `;
        }
        console.log(output)
    }

    
}

travelTime(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
    "Bulgaria > Sofia > 100",
    "Bulgaria > varna > 300"]);