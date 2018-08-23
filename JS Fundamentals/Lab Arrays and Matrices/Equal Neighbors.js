function equalNeighbors(arr) {
    let count = 0;
    //console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j+1] && arr[i][j] === arr[i][j+1]) {
                count++;
            }

            if (arr[i+1] && arr[i][j] === arr[i+1][j]) {
                count++;
            }
        }

    }
    console.log(count);
}

/*equalNeighbors([['2', '3', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']]);*/
/*equalNeighbors([['test', 'yes', 'yo', 'ho'],
                ['well', 'done', 'yo', '6'],
                ['not', 'done', 'yet', '5']]);*/
equalNeighbors([[2, 2, 5, 7, 4],
                [4, 0, 5, 3, 4],
                [2, 5, 5, 4, 2]])