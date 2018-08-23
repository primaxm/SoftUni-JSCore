function aggregateElements(arr) {
    let sum = 0;
    let inverseValuesSum = 0;
    let conacat = '';
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        inverseValuesSum += 1/arr[i];
        conacat += arr[i];
    }

    console.log(sum);
    console.log(inverseValuesSum);
    console.log(conacat);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);