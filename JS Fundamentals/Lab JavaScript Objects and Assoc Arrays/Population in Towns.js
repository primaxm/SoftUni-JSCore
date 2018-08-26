function populationInTowns(arr) {
    let cityPopulation = new Map();
    for (let i = 0; i < arr.length; i++) {
        let splited = arr[i].split(" <-> ").map(a => a.trim()).filter(s => s !== '');
        if (cityPopulation[splited[0]]) {
            cityPopulation[splited[0]] += Number(splited[1]);
        } else {
            cityPopulation[splited[0]] = Number(splited[1]);
        }
    }

    for (const cityPopulationKey in cityPopulation) {
        console.log(`${cityPopulationKey} : ${cityPopulation[cityPopulationKey]}`)
    }
}

populationInTowns(["Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000"]);