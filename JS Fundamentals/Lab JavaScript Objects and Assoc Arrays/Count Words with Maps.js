function countWordsWithMaps(arr) {
    let data = new Map();
    for (let i = 0; i < arr.length; i++) {
        let splited = arr[i].split(/[,\s\.'-]/).map(a => a.trim()).filter(s => s !== '');
        for (const word of splited) {
            if (data[word.toLowerCase()]) {
                data[word.toLowerCase()]++;
            } else {
                data[word.toLowerCase()] = 1;
            }
        }
    }
    let mapKeys = Object.keys(data);
    mapKeys = mapKeys.sort();
    for (let i = 0; i < mapKeys.length; i++) {
        console.log(`'${mapKeys[i]}' -> ${data[mapKeys[i]]} times`)
    }

}

countWordsWithMaps(["JS devs use Node.js for server-side JS. JS devs use JS.",
    " -- JS for devs --"]);