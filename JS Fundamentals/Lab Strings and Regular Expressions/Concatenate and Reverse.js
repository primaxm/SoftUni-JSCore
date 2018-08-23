function concatenateAndReverse(arr) {
    let concat = arr.reduce((a, b) => a + b);
    console.log(concat.split('').reverse().join(''));
}

concatenateAndReverse(['I', 'am', 'student']);
concatenateAndReverse(['race', 'car']);