function lowestPricesInCities(arr) {
    let products = new Map();
    for (let i = 0; i < arr.length; i++) {
        let splited = arr[i].split(" | ").map(a => a.trim()).filter(s => s !== '');
        let city = splited[0];
        let product = splited[1];
        let quantity = Number(splited[2]);

        if (products[product]) {
            products[product][city] = quantity;
        } else {
            products[product] = [];
            products[product][city] = quantity;
        }
    }

    for (const argumentsKey in products) {
        let qua = Object.keys(products[argumentsKey]).sort((a,b) => products[argumentsKey][a]-products[argumentsKey][b]);
        console.log(`${argumentsKey} -> ${products[argumentsKey][qua[0]]} (${qua[0]})`)
    }
}

lowestPricesInCities(["Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10"]);