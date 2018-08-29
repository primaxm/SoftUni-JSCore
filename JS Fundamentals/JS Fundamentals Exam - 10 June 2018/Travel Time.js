function travelTime(arr) {
    let data = new Map();

    let countryesData = [];

    for (let i = 0; i < arr.length; i++) {
        let [country, city, price] = arr[i].split(" > ");
        city = city[0].toUpperCase() + city.slice(1);

        if (countryesData[country]) {
            if (countryesData[country][city]) {
                if (countryesData[country][city] > Number(price)) {
                    countryesData[country][city] = Number(price);
                }
            } else {
                countryesData[country][city] = Number(price);
            }
        } else {
            let cityData = [];
            cityData[city] = Number(price);
            countryesData[country] = cityData;
        }
    }

    for (const countryesDataKey in countryesData) {
        let orderedCityes = Object.keys(countryesData[countryesDataKey]).sort((a, b) => {
            return countryesData[countryesDataKey][a] - countryesData[countryesDataKey][b];
        });

        let ordCity = [];
        for (let i = 0; i < orderedCityes.length; i++) {
            ordCity[orderedCityes[i]] = countryesData[countryesDataKey][orderedCityes[i]];

        }
        countryesData[countryesDataKey] = ordCity;
    }
    let countrySort = Object.keys(countryesData).sort((a, b) => {return a.localeCompare(b);})

    let finalData = []
    for (let i = 0; i < countrySort.length; i++) {
        finalData[countrySort[i]] = countryesData[countrySort[i]];
    }

    for (const finalDataKey in finalData) {
        let output = `${finalDataKey} -> `;
        for (const finalDataKeyKey in finalData[finalDataKey]) {
            output += `${finalDataKeyKey} -> ${finalData[finalDataKey][finalDataKeyKey]} `;
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
