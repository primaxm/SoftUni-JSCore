function diagonalSums(arr) {
    let sumLeft = 0;
    let sumRight = 0;
    for (let i = 0; i < arr.length; i++) {
        sumLeft += arr[i][i];
        sumRight += arr[i][arr.length-1-i];
    }
    console.log(`${sumLeft} ${sumRight}`);
}

diagonalSums([[20, 40], [10, 60]]);
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);