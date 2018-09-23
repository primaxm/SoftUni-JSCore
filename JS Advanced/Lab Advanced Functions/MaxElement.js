function maxElemnt(arr) {
    return Math.max(...arr);
}

function maxElemnt2(arr) {
    console.log(arr.reduce((a, b) => Math.max(a, b)));
}

maxElemnt([10, 20, 5]);
maxElemnt([1, 44, 123, 33]);