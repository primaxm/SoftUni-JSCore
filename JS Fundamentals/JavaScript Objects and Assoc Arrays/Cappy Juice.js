function cappyJuice(arr) {
    let juices = {};
    let botleData = new Map;
    for (let i = 0; i < arr.length; i++) {
        let data = arr[i].split(" => ");
        if (juices[data[0]]) {
            juices[data[0]] += Number(data[1]);
        } else {
            juices[data[0]] = Number(data[1]);
        }
        if (juices[data[0]] >= 1000) {
                botleData[data[0]] = juices[data[0]];
        }
    }

    for (const arrKey in botleData) {
        let bottels = Math.floor(botleData[arrKey]/1000);
        console.log(`${arrKey} => ${bottels}`);
    }
}

cappyJuice(["Orange => 2000",
    "Peach => 1432",
    "Banana => 450",
    "Peach => 600",
    "Strawberry => 549"]);

cappyJuice(["Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
    "Watermelon => 6789"])