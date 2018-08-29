function uniqueSequences(arr) {
    arr = arr.map(a => a.split(/[\s\,\[\]]/g).filter(a => a !== "").map(a => Number(a)));
    arr = arr.map(element => element.sort((a,b) => Number(b)-Number(a)));
    arr = arr.map(a => a.join(','));
    arr = arr.filter((v, i, a) => a.indexOf(v) === i);
    arr = arr.map(a => a.split(",").map(b => Number(b)));
    arr = arr.sort((a, b) => {
            return a.length - b.length;
        })
    for (let i = 0; i < arr.length; i++) {
            console.log(`[${arr[i].join(", ")}]`)
    }
}

uniqueSequences([ '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]' ]);


