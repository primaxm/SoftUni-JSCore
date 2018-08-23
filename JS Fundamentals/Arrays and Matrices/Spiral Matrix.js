function spiralMatrix(rows, cols) {
let [count, maxCount, minRow, minCol, maxRow, maxCol] = [0, rows * cols, 0, 0, rows-1, cols-1];

    let matrix = [[]];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
    }
    while(count < maxCount){
        for (let i = minCol; i <= maxCol && count < maxCount; i++) {
            matrix[minRow][i] = ++count;
        }
        minRow++;
        for (let i = minRow; i <= maxRow && count < maxCount; i++) {
            matrix[i][maxCol] = ++count;
        }
        maxCol--;
        for (let i = maxCol; i >= minCol && count < maxCount; i--) {
            matrix[maxRow][i] = ++count;
        }
        maxRow--;
        for (let i = maxRow; i >= minRow  && count < maxCount; i--) {
            matrix[i][minCol] = ++count;
        }
        minCol++;
    }

    matrix.forEach(row => console.log(row.join(" ")));
}

spiralMatrix(5, 5);
//spiralMatrix(3, 3);
