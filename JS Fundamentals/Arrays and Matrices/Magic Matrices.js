function magicMatrices(arr) {
    let rowsSum = arr.map(r => r.reduce((a, b) => a + b));
    let colsSum = arr.reduce((a, b) => a.map((x, i) => x + b[i]));

    let isMagic = true;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (rowsSum[i] !== colsSum[j]) {
                isMagic = false;
                break;
            }
        }
    }
    console.log(isMagic);
}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])

//magicMatrices([[0, 0], [0, 0]])