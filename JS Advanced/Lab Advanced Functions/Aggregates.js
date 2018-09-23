function reduce(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let min = arr.reduce((a, b) => Math.min(a, b));
    let max = arr.reduce((a, b) => Math.max(a, b));
    let multiply = arr.reduce((a, b) => a * b);
    let concat = arr.reduce((a, b) => '' + a + b);

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${multiply}`);
    console.log(`Join = ${concat}`);

}

reduce([2,3,10,5]);
reduce([5, -3, 20, 7, 0.5]);
