function diagonalAttack(arr) {
    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        matrix[i] = arr[i].split(' ').filter(x => x != '').map(Number);

    }

    let [sumLeft, sumRight] = [0, 0];
    for (let i = 0; i < matrix.length; i++) {
        sumLeft += matrix[i][i];
        sumRight += matrix[matrix.length-1-i][matrix.length-1-i];
    }

    if(sumLeft === sumRight) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if(i !== j && j !== matrix.length-1-i){
                    matrix[i][j] = sumLeft;
                }
            }
        }
        matrix.forEach(row => console.log(row.join(' ')));
    } else {
        console.log(matrix)
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
//diagonalAttack();