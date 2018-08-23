function biggestElement (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let biggest = arr[i].sort((a, b) => b-a);
        result.push(biggest[0]);
    }
    result = result.sort((a, b) => b-a);
    console.log(result[0]);
}

biggestElement([[20, 50, 10], [8, 33, 145]]);
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);