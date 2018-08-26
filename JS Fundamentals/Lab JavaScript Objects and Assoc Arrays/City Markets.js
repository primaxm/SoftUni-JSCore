function cityMarkets(arr) {
    let citySales = new Map();
    for (let i = 0; i < arr.length; i++) {
        let splited = arr[i].split(" -> ").map(a => a.trim()).filter(s => s !== '');
        let cityName = splited[0];
        let productName = splited[1];
        let productTotalIncome = splited[2].split(" : ").filter(s => s !== '').map(a => Number(a)).reduce((a, b) => a*b);

        if (citySales[cityName]) {
            if (citySales[cityName][productName]) {
                citySales[cityName][productName] += productTotalIncome;
            } else {
                citySales[cityName][productName] = productTotalIncome;
            }
        } else {
            citySales[cityName] = new Map();
            citySales[cityName][productName] = productTotalIncome;
        }
    }

    for (const key in citySales) {
        console.log(`Town - ${key}`);
        for (const insideKey in citySales[key]) {
            console.log(`$$$${insideKey} : ${citySales[key][insideKey]}`)
        }
    }
}

cityMarkets(["Sofia -> Laptops HP -> 200 : 2000",
    "Sofia -> Raspberry -> 200000 : 1500",
    "Sofia -> Audi Q7 -> 200 : 100000",
    "Montana -> Portokals -> 200000 : 1",
    "Montana -> Qgodas -> 20000 : 0.2",
    "Montana -> Chereshas -> 1000 : 0.3"]);