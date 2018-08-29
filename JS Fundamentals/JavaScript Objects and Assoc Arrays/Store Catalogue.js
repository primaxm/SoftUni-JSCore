function storeCatalogue(arr) {
    let products = [];
    for (let i = 0; i < arr.length; i++) {
        let spl = arr[i].split(" : ").filter(a => a !== '');
        products[spl[0]] = spl[1];
    }

    let orderedKeys = Object.keys(products).sort();
    for (let i = 0; i < orderedKeys.length; i++) {

        if (i === 0)  console.log(orderedKeys[i][0]);
        if(i > 0 && orderedKeys[i-1][0] !== orderedKeys[i][0]) console.log(orderedKeys[i][0]);
        console.log(`  ${orderedKeys[i]}: ${products[orderedKeys[i]]}`);
    }
}

storeCatalogue(["Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"]);