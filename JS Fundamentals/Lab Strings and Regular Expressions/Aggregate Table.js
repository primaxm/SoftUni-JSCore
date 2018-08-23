function aggregateTable(arr) {
    let result = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let spl = arr[i].split("|");
        result.push(spl[1].trim());
        sum += Number(spl[2].trim());
    }

    console.log(result.join(", "));
    console.log(sum)
}

aggregateTable(['| Sofia           | 300',
                '| Veliko Tarnovo  | 500',
                '| Yambol          | 275']);