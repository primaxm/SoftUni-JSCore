function nonDecreasingSubsequence(arr) {
    let currentBiggestOne = 0;
    for (let i = 0; i < arr.length; i++) {
        if (currentBiggestOne <= Number(arr[i])) {
            currentBiggestOne = Number(arr[i]);
            console.log(arr[i])
        }
    }
}

nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubsequence([20, 3, 2, 15, 6, 1]);