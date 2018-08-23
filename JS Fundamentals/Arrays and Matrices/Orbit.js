function orbit([rows, cols, x, y]) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
    }
    let [count, starRow, startCol, endRow, endCol] = [0, x, y, 0, 0];
    matrix[x][y] = 1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let rDistance = Math.abs(i - x) + 1;
            let cDistance = Math.abs(j - y) + 1;
            matrix[i][j] = Math.max(rDistance, cDistance);
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);