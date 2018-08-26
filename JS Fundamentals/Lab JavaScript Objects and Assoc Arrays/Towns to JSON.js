function townsToJSON(arr) {
    let result = [];
    for (let i = 0; i < arr.length-1; i++) {
        let keys = arr[0].split("|").map(a => a = a.trim()).filter(b => b !== '')
        let tmp = arr[i+1].split("|").map(a => a = a.trim()).filter(b => b !== '');
        let obj = {};
/*        for (let j = 0; j < keys.length; j++) {
            obj[keys[j]] = tmp[j];
        }*/
        obj[keys[0]] = tmp[0];
        obj[keys[1]] = Number(tmp[1]);
        obj[keys[2]] = Number(tmp[2]);
        result[i] = obj;
    }

    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])